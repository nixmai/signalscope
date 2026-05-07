import type { PricePoint } from "@/types/stock";

export type FreePriceData = {
  price: number;
  change: number;
  changePercent: number;
  lastTradingDate: string;
  history: PricePoint[];
  source: string;
  sourceUrl: string;
};

type StooqRow = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export async function fetchFreePriceData(symbol: string): Promise<FreePriceData | null> {
  const nasdaqData = await fetchNasdaqPriceData(symbol);
  if (nasdaqData) return nasdaqData;

  const normalized = symbol.trim().toLowerCase().replace(/[^a-z.]/g, "");
  if (!normalized) return null;

  const stooqKey = process.env.STOOQ_API_KEY;
  if (!stooqKey) return null;

  const sourceUrl = `https://stooq.com/q/d/l/?s=${normalized}.us&i=d&apikey=${stooqKey}`;

  try {
    const response = await fetch(sourceUrl, {
      next: { revalidate: 60 * 60 },
      headers: {
        "User-Agent": process.env.SEC_USER_AGENT ?? "SignalScope research app contact@example.com",
      },
    });

    if (!response.ok) return null;

    const rows = parseStooqCsv(await response.text());
    if (rows.length < 2) return null;

    const latest = rows[rows.length - 1];
    const previous = rows[rows.length - 2];
    const change = latest.close - previous.close;
    const changePercent = previous.close === 0 ? 0 : (change / previous.close) * 100;

    return {
      price: latest.close,
      change,
      changePercent,
      lastTradingDate: latest.date,
      history: rows.slice(-252).map((row) => ({
        date: row.date,
        close: row.close,
        volume: row.volume,
      })),
      source: "Stooq daily CSV",
      sourceUrl: sourceUrl.replace(stooqKey, "configured"),
    };
  } catch (error) {
    console.warn(`[free-market-data] Failed to fetch ${symbol}`, error);
    return null;
  }
}

async function fetchNasdaqPriceData(symbol: string): Promise<FreePriceData | null> {
  const normalized = symbol.trim().toUpperCase().replace(/[^A-Z.]/g, "");
  if (!normalized) return null;

  const quoteUrl = `https://api.nasdaq.com/api/quote/${normalized}/info?assetclass=stocks`;
  const chartUrl = `https://api.nasdaq.com/api/quote/${normalized}/chart?assetclass=stocks`;

  try {
    const [quoteResponse, chartResponse] = await Promise.all([
      fetch(quoteUrl, {
        next: { revalidate: 15 * 60 },
        headers: nasdaqHeaders(),
      }),
      fetch(chartUrl, {
        next: { revalidate: 15 * 60 },
        headers: nasdaqHeaders(),
      }),
    ]);

    if (!quoteResponse.ok || !chartResponse.ok) return null;

    const quoteJson = (await quoteResponse.json()) as NasdaqQuoteResponse;
    const chartJson = (await chartResponse.json()) as NasdaqChartResponse;
    const primary = quoteJson.data?.primaryData;
    const price = parseMoney(primary?.lastSalePrice);
    const change = parseMoney(primary?.netChange);
    const changePercent = parsePercent(primary?.percentageChange);
    const chart = chartJson.data?.chart ?? [];
    const history = chart
      .map((point) => ({
        date: point.z?.dateTime ?? new Date(point.x).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
        close: Number(point.y),
        volume: 0,
      }))
      .filter((point) => Number.isFinite(point.close) && point.close > 0);

    if (!Number.isFinite(price) || price <= 0 || history.length < 2) return null;

    return {
      price,
      change,
      changePercent,
      lastTradingDate: primary?.lastTradeTimestamp ?? chartJson.data?.timeAsOf ?? "latest available",
      history: compressIntradayHistory(history),
      source: "Nasdaq public quote",
      sourceUrl: quoteUrl,
    };
  } catch (error) {
    console.warn(`[free-market-data] Failed to fetch Nasdaq data for ${symbol}`, error);
    return null;
  }
}

function parseStooqCsv(csv: string): StooqRow[] {
  const lines = csv.trim().split(/\r?\n/);
  const rows = lines.slice(1);

  return rows
    .map((line) => {
      const [date, open, high, low, close, volume] = line.split(",");
      return {
        date,
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
        volume: Number(volume),
      };
    })
    .filter((row) => row.date && Number.isFinite(row.close) && row.close > 0);
}

function nasdaqHeaders() {
  return {
    Accept: "application/json, text/plain, */*",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    Referer: "https://www.nasdaq.com/",
  };
}

function parseMoney(value?: string) {
  if (!value) return Number.NaN;
  return Number(value.replace(/[$,%+,]/g, ""));
}

function parsePercent(value?: string) {
  if (!value) return 0;
  return Number(value.replace(/[%+,]/g, ""));
}

function compressIntradayHistory(history: PricePoint[]) {
  if (history.length <= 120) return history;
  const step = Math.ceil(history.length / 120);
  return history.filter((_, index) => index % step === 0 || index === history.length - 1);
}

type NasdaqQuoteResponse = {
  data?: {
    primaryData?: {
      lastSalePrice?: string;
      netChange?: string;
      percentageChange?: string;
      lastTradeTimestamp?: string;
    };
  };
};

type NasdaqChartResponse = {
  data?: {
    timeAsOf?: string;
    chart?: Array<{
      x: number;
      y: number;
      z?: {
        dateTime?: string;
      };
    }>;
  };
};
