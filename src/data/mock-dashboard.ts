import { fetchFreePriceData } from "@/lib/api/free-market-data";
import type { DashboardData } from "@/types/stock";

export const suggestedTickers = ["NVDA", "AMD", "CRWV", "PLAB", "CRDO", "MRVL", "OKLO", "AAOI", "SMCI"];

export const trendingThemes = [
  { label: "AI data center", tickers: "NVDA, AMD, MRVL, VRT" },
  { label: "Optical networking", tickers: "CRDO, AAOI, LITE, COHR" },
  { label: "Power capacity", tickers: "OKLO, CEG, VST, GEV" },
  { label: "Semicap supply chain", tickers: "PLAB, ASML, AMAT, KLAC" },
];

export const mockDashboard: DashboardData = {
  company: {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Semiconductors",
    marketCap: 2920000000000,
    website: "https://www.nvidia.com",
    description:
      "NVIDIA designs accelerated computing platforms spanning GPUs, networking, systems, software, and developer tools for data center, gaming, professional visualization, automotive, and edge AI workloads.",
    ceo: "Jensen Huang",
    country: "United States",
    employees: 29600,
  },
  quote: {
    price: 119.44,
    change: 2.18,
    changePercent: 1.86,
    lastUpdated: "May 6, 2026 1:15 PM PT",
    currency: "USD",
    source: "Demo data",
    freshness: "mock",
  },
  priceHistory: [
    { date: "Jan", close: 84, volume: 312 },
    { date: "Feb", close: 91, volume: 285 },
    { date: "Mar", close: 96, volume: 341 },
    { date: "Apr", close: 103, volume: 327 },
    { date: "May", close: 111, volume: 366 },
    { date: "Jun", close: 107, volume: 298 },
    { date: "Jul", close: 116, volume: 352 },
    { date: "Aug", close: 122, volume: 401 },
    { date: "Sep", close: 118, volume: 338 },
    { date: "Oct", close: 127, volume: 389 },
    { date: "Nov", close: 134, volume: 421 },
    { date: "Dec", close: 141, volume: 454 },
  ],
  dataNotice: {
    label: "Demo data only",
    detail: "Prices, financials, news, filings, and report text are mocked until a free or configured provider succeeds.",
  },
  financialMetrics: [
    { label: "Revenue", value: "$130.5B", change: "+114% YoY", status: "up" },
    { label: "Gross margin", value: "75.0%", change: "+2.3 pts", status: "up" },
    { label: "Operating margin", value: "62.4%", change: "+8.7 pts", status: "up" },
    { label: "Net income", value: "$72.9B", change: "+145% YoY", status: "up" },
    { label: "Free cash flow", value: "$60.9B", change: "+125% YoY", status: "up" },
    { label: "Cash", value: "$43.2B", change: "+$17.4B", status: "up" },
    { label: "Debt", value: "$10.3B", change: "Stable", status: "flat" },
    { label: "P/S", value: "22.4x", change: "Premium", status: "down" },
    { label: "P/E", value: "40.1x", change: "Above peers", status: "down" },
    { label: "EV/Sales", value: "21.8x", change: "High", status: "down" },
  ],
  revenueMargins: [
    { period: "FY21", revenue: 16.7, grossMargin: 62.3, operatingMargin: 27.2 },
    { period: "FY22", revenue: 26.9, grossMargin: 64.9, operatingMargin: 37.3 },
    { period: "FY23", revenue: 27.0, grossMargin: 56.9, operatingMargin: 20.7 },
    { period: "FY24", revenue: 60.9, grossMargin: 72.7, operatingMargin: 54.1 },
    { period: "FY25", revenue: 130.5, grossMargin: 75.0, operatingMargin: 62.4 },
  ],
  competitors: [
    {
      ticker: "AMD",
      name: "Advanced Micro Devices",
      marketCap: "$240B",
      revenueGrowth: "+14%",
      psRatio: "9.5x",
      relationshipType: "direct_peer",
      whyItCompetes: "Competes in GPUs, AI accelerators, CPUs, and data center silicon.",
    },
    {
      ticker: "AVGO",
      name: "Broadcom",
      marketCap: "$640B",
      revenueGrowth: "+44%",
      psRatio: "15.8x",
      relationshipType: "theme_peer",
      whyItCompetes: "Benefits from custom AI silicon and networking demand inside hyperscale data centers.",
    },
    {
      ticker: "MRVL",
      name: "Marvell Technology",
      marketCap: "$62B",
      revenueGrowth: "+7%",
      psRatio: "10.7x",
      relationshipType: "supply_chain_peer",
      whyItCompetes: "Supplies data center networking, optical DSP, and custom silicon infrastructure.",
    },
    {
      ticker: "ANET",
      name: "Arista Networks",
      marketCap: "$112B",
      revenueGrowth: "+20%",
      psRatio: "17.1x",
      relationshipType: "theme_peer",
      whyItCompetes: "AI cluster buildouts increase demand for high-speed Ethernet networking.",
    },
  ],
  partnerships: [
    {
      ticker: "MSFT",
      name: "Microsoft",
      relationship: "Cloud customer / AI infrastructure demand",
      description: "Large cloud platforms are key end markets for NVIDIA accelerators, networking, and systems.",
      importance: "high",
      sourceLabel: "Research map",
    },
    {
      ticker: "SMCI",
      name: "Supermicro",
      relationship: "Server ecosystem partner",
      description: "System builders package NVIDIA GPUs and networking into AI server platforms for enterprises and cloud buyers.",
      importance: "medium",
      sourceLabel: "Research map",
    },
  ],
  news: [
    {
      title: "Hyperscaler AI capex remains elevated into the next product cycle",
      source: "Mock Market Desk",
      date: "May 5, 2026",
      sentiment: "positive",
      whyItMatters: "Sustained data center spending supports demand visibility, but also raises expectations.",
      url: "https://example.com/news/ai-capex",
    },
    {
      title: "Export restriction commentary keeps China revenue uncertainty in focus",
      source: "Mock Regulatory Wire",
      date: "May 2, 2026",
      sentiment: "negative",
      whyItMatters: "Policy changes can affect addressable market, product mix, and margin assumptions.",
      url: "https://example.com/news/export-controls",
    },
    {
      title: "Networking supply chain checks point to stronger AI cluster demand",
      source: "Mock Channel Checks",
      date: "Apr 29, 2026",
      sentiment: "positive",
      whyItMatters: "Networking attach rates are important for full-stack platform revenue, not just GPU units.",
      url: "https://example.com/news/networking",
    },
  ],
  filings: [
    {
      formType: "10-K",
      filedAt: "Mar 18, 2026",
      summary: "Annual report highlighted data center concentration, supply commitments, export controls, and fast-changing competition as key risks.",
      url: "https://www.sec.gov/",
    },
    {
      formType: "10-Q",
      filedAt: "Nov 21, 2025",
      summary: "Quarterly filing showed continued revenue mix shift toward data center and elevated working-capital needs tied to advanced platform ramps.",
      url: "https://www.sec.gov/",
    },
    {
      formType: "8-K",
      filedAt: "Feb 26, 2026",
      summary: "Earnings release pointed to strong demand for accelerated computing, with management noting supply constraints in select platforms.",
      url: "https://www.sec.gov/",
    },
  ],
  report: {
    executiveSummary: [
      "NVIDIA is primarily an accelerated computing platform company, with data center AI driving the current financial profile.",
      "Revenue, gross margin, operating margin, and free cash flow have improved sharply in the mocked financial set.",
      "The company scores strongly on quality, growth, momentum, and balance sheet strength, but valuation risk is elevated.",
      "The core bull case is sustained AI infrastructure demand plus platform expansion across networking, software, and systems.",
      "The core bear case is that expectations, supply cycles, export rules, and customer concentration leave little room for disappointment.",
    ],
    biggestBullPoint: "AI data center demand can remain structurally strong if model scaling and enterprise deployment continue.",
    biggestBearPoint: "A premium valuation could compress if growth normalizes faster than investors expect.",
    businessOverview: {
      whatTheyDo:
        "NVIDIA builds GPUs, accelerated computing systems, networking hardware, software libraries, and AI platform tools.",
      howTheyMakeMoney:
        "The company sells chips, systems, networking products, software subscriptions, and platform-related services across data center, gaming, professional visualization, automotive, and edge markets.",
      mainSegments: ["Data Center", "Gaming", "Professional Visualization", "Automotive"],
      keyCustomersOrEndMarkets: ["Cloud hyperscalers", "AI labs", "Enterprise AI buyers", "Gaming users", "Automotive OEMs"],
    },
    valuation: {
      summary:
        "The mocked valuation set indicates a high-quality growth profile with valuation multiples that price in durable AI leadership.",
      relativeValuation:
        "NVIDIA screens at a premium to most semiconductor peers on sales and earnings multiples.",
      expensiveOrCheapVsPeers:
        "Expensive versus peers, though the premium is partly supported by superior margins and growth in this mock dataset.",
    },
    bullCase: [
      "AI training and inference workloads keep expanding across hyperscalers and enterprises.",
      "Networking, systems, and software increase platform monetization beyond standalone GPUs.",
      "High gross margins and free cash flow support continued reinvestment and optionality.",
    ],
    bearCase: [
      "Growth slows as customers digest large AI infrastructure purchases.",
      "Competitive custom silicon and rival accelerators reduce pricing power over time.",
      "Export restrictions or supply constraints disrupt revenue visibility.",
    ],
    risks: [
      {
        risk: "Valuation premium",
        severity: "high",
        explanation: "Current multiples leave less tolerance for execution misses or slower data center growth.",
      },
      {
        risk: "Customer concentration",
        severity: "medium",
        explanation: "Large cloud customers can materially influence demand timing, pricing, and inventory cycles.",
      },
      {
        risk: "Regulatory exposure",
        severity: "medium",
        explanation: "Export controls may affect what products can be sold into restricted markets.",
      },
    ],
    catalysts: [
      {
        catalyst: "Next earnings report",
        timeframe: "Near term",
        whyItMatters: "Investors will watch data center growth, gross margin, and supply commentary.",
      },
      {
        catalyst: "New AI platform ramp",
        timeframe: "6-12 months",
        whyItMatters: "Successful transitions can extend the upgrade cycle and support average selling prices.",
      },
    ],
    themeExposure: [
      {
        theme: "AI data center",
        exposureLevel: "high",
        reason: "Data center AI drives the majority of growth in the mocked financial profile.",
      },
      {
        theme: "Semiconductors",
        exposureLevel: "high",
        reason: "NVIDIA remains tightly linked to semiconductor cycles, supply capacity, and chip competition.",
      },
      {
        theme: "Cloud infrastructure",
        exposureLevel: "medium",
        reason: "Hyperscaler capex is a major demand driver, but the company also sells into broader end markets.",
      },
    ],
    researchVerdict: {
      summary:
        "High-quality compounder profile with excellent mocked fundamentals, offset by elevated valuation risk and policy uncertainty. This is a research framework, not investment advice.",
      qualityScore: 94,
      growthScore: 92,
      valuationRiskScore: 78,
      balanceSheetScore: 88,
      momentumScore: 84,
      overallResearchScore: 82,
      label: "Strong but monitor valuation/risk",
    },
    questionsToResearchFurther: [
      "How concentrated is data center revenue among the top cloud customers?",
      "What margin assumptions are embedded in consensus estimates?",
      "How quickly can inference demand offset any slowdown in training cluster buildouts?",
    ],
  },
};

export function getMockDashboard(symbol: string): DashboardData {
  // TODO: Replace with normalized provider data from SEC, FMP, Finnhub, and Polygon/Massive.
  const ticker = symbol.toUpperCase();
  const profile = mockProfiles[ticker] ?? {
    name: `${ticker} Research Profile`,
    description: `${ticker} is shown with generated mock research data until live provider integrations are connected.`,
    industry: "Equity research preview",
    sector: "Market data pending",
    ceo: "Data pending",
    marketCap: 18400000000,
    price: 42.8,
    change: -0.34,
    revenue: "$4.2B",
    revenueGrowth: "+9% YoY",
    margin: "41.0%",
    operatingMargin: "14.6%",
    netIncome: "$620M",
    fcf: "$510M",
    cash: "$1.8B",
    debt: "$1.1B",
    ps: "4.4x",
    pe: "28.0x",
    evSales: "4.8x",
    theme: "Company-specific research",
    bull: "Live data integrations will identify the key upside drivers for this ticker.",
    bear: "Current preview data is illustrative, so source filings and provider data should be checked before drawing conclusions.",
    peers: ["NVDA", "AMD", "MRVL", "AVGO"],
    partnerships: [],
    segments: ["Core operations", "Growth initiatives", "Balance sheet"],
    endMarkets: ["Public markets", "Sector peers", "Research workflow"],
    revenueBase: 3.1,
    revenueSlope: 0.09,
    grossBase: 38.0,
    grossSlope: 0.8,
    operatingBase: 10.0,
    operatingSlope: 1.0,
    scores: [58, 55, 52, 61, 50] as [number, number, number, number, number],
    label: "Mixed profile / needs more research",
  };
  const data = structuredClone(mockDashboard);
  const changePercent = (profile.change / profile.price) * 100;
  const base = profile.price * 0.72;

  data.company = {
    ...data.company,
    ticker,
    name: profile.name,
    sector: profile.sector,
    industry: profile.industry,
    marketCap: profile.marketCap,
    description: profile.description,
    ceo: profile.ceo,
    employees: profile.employees ?? data.company.employees,
    website: profile.website ?? data.company.website,
  };
  data.quote = {
    ...data.quote,
    price: profile.price,
    change: profile.change,
    changePercent,
  };
  data.priceHistory = data.priceHistory.map((point, index) => ({
    ...point,
    close: Number((base + index * profile.price * 0.035 + Math.sin(index) * profile.price * 0.025).toFixed(2)),
  }));
  data.financialMetrics = [
    { label: "Revenue", value: profile.revenue, change: profile.revenueGrowth, status: profile.revenueGrowth.startsWith("+") ? "up" : "down" },
    { label: "Gross margin", value: profile.margin, change: profile.marginChange ?? "Stable", status: profile.marginChange?.startsWith("+") ? "up" : "flat" },
    { label: "Operating margin", value: profile.operatingMargin, change: profile.operatingChange ?? "Mixed", status: profile.operatingChange?.startsWith("+") ? "up" : "flat" },
    { label: "Net income", value: profile.netIncome, change: profile.incomeChange ?? "Latest FY", status: "up" },
    { label: "Free cash flow", value: profile.fcf, change: profile.fcfChange ?? "Latest FY", status: "up" },
    { label: "Cash", value: profile.cash, change: "Liquidity", status: "up" },
    { label: "Debt", value: profile.debt, change: "Watch leverage", status: "flat" },
    { label: "P/S", value: profile.ps, change: profile.valuationNote ?? "Peer check", status: "down" },
    { label: "P/E", value: profile.pe, change: "Research metric", status: "flat" },
    { label: "EV/Sales", value: profile.evSales, change: "Research metric", status: "flat" },
  ];
  data.revenueMargins = data.revenueMargins.map((point, index) => ({
    ...point,
    revenue: Number((profile.revenueBase * (1 + index * profile.revenueSlope)).toFixed(1)),
    grossMargin: Number((profile.grossBase + index * profile.grossSlope).toFixed(1)),
    operatingMargin: Number((profile.operatingBase + index * profile.operatingSlope).toFixed(1)),
  }));
  data.competitors = profile.peers.map((peerTicker, index) => {
    const peerProfile = mockProfiles[peerTicker] ?? mockProfiles.NVDA;
    return {
      ticker: peerTicker,
      name: peerProfile.name,
      marketCap: formatMockCap(peerProfile.marketCap),
      revenueGrowth: peerProfile.revenueGrowth.replace(" YoY", ""),
      psRatio: peerProfile.ps,
      relationshipType: index === 0 ? "direct_peer" : index === 1 ? "theme_peer" : "sector_peer",
      whyItCompetes: `${peerTicker} is included as a mock peer for ${profile.theme.toLowerCase()} exposure and relative valuation context.`,
    };
  });
  data.partnerships = profile.partnerships.length > 0 ? profile.partnerships : defaultPartnerships(ticker, profile);
  data.news = data.news.map((article, index) => ({
    ...article,
    title: `${ticker} ${mockNewsHooks[index]}`,
    whyItMatters: `${profile.name.split(" ")[0]} investors would watch this because it can affect ${profile.theme.toLowerCase()} expectations, margins, or valuation risk.`,
  }));
  data.filings = data.filings.map((filing) => ({
    ...filing,
    summary: `${ticker} ${filing.formType} mock summary: review source filings for business mix, liquidity, competition, risk factors, and recent operating commentary.`,
  }));
  data.report = {
    ...data.report,
    executiveSummary: [
      `${profile.name} is modeled here as a ${profile.theme.toLowerCase()} research candidate, with ticker-specific mock data until live APIs are connected.`,
      `${profile.revenue} revenue and ${profile.margin} gross margin are illustrative placeholders for the dashboard workflow.`,
      `The main bull case is: ${profile.bull}`,
      `The main bear case is: ${profile.bear}`,
      "Scores are a research framework only and should not be read as investment advice.",
    ],
    biggestBullPoint: profile.bull,
    biggestBearPoint: profile.bear,
    businessOverview: {
      whatTheyDo: profile.description,
      howTheyMakeMoney: `${profile.name} monetization is represented with mock segment and end-market data pending provider integration.`,
      mainSegments: profile.segments,
      keyCustomersOrEndMarkets: profile.endMarkets,
    },
    valuation: {
      summary: `${ticker} screens at ${profile.ps} sales and ${profile.pe} earnings in this mock dataset.`,
      relativeValuation: `Compare ${ticker} against ${profile.peers.join(", ")} for peer context once live data is connected.`,
      expensiveOrCheapVsPeers: profile.valuationNote ?? "Valuation signal is illustrative until provider metrics are available.",
    },
    bullCase: [profile.bull, `Theme exposure: ${profile.theme}.`, "Cleaner live data will improve confidence in the research score."],
    bearCase: [profile.bear, "Mock data can miss company-specific risk until source documents are connected.", "Peer multiples may change materially with market conditions."],
    risks: [
      { risk: "Data freshness", severity: "medium", explanation: "This is currently mocked data, so source filings and market data should be verified." },
      { risk: "Valuation sensitivity", severity: profile.ps.includes("x") ? "medium" : "low", explanation: "Multiple compression can matter if growth or margins disappoint." },
      { risk: "Execution risk", severity: "medium", explanation: `${ticker} still requires company-specific diligence around demand, competition, and capital allocation.` },
    ],
    catalysts: [
      { catalyst: "Next earnings report", timeframe: "Near term", whyItMatters: "Revenue growth, margins, and guidance will shape the next research update." },
      { catalyst: `${profile.theme} demand checks`, timeframe: "3-12 months", whyItMatters: "Theme durability affects peer comparisons and valuation support." },
    ],
    themeExposure: [
      { theme: profile.theme, exposureLevel: "high", reason: `${ticker} is mapped to this primary theme for the mock dashboard.` },
      { theme: profile.sector, exposureLevel: "medium", reason: "Sector context will be refined with live provider classifications." },
    ],
    researchVerdict: {
      ...data.report.researchVerdict,
      summary: `${ticker} is a ticker-specific mock preview. Use it to review layout and workflow, not as source-verified research.`,
      qualityScore: profile.scores[0],
      growthScore: profile.scores[1],
      valuationRiskScore: profile.scores[2],
      balanceSheetScore: profile.scores[3],
      momentumScore: profile.scores[4],
      overallResearchScore: Math.round(0.25 * profile.scores[0] + 0.25 * profile.scores[1] + 0.2 * profile.scores[3] + 0.15 * profile.scores[4] + 0.15 * (100 - profile.scores[2])),
      label: profile.label,
    },
  };

  return data;
}

export async function getDashboardData(symbol: string): Promise<DashboardData> {
  const data = getMockDashboard(symbol);
  const freePriceData = await fetchFreePriceData(data.company.ticker);

  if (!freePriceData) {
    return {
      ...data,
      dataNotice: {
        label: "Demo fallback active",
        detail: "A free price source was unavailable, so this page is using ticker-specific demo data.",
      },
    };
  }

  return {
    ...data,
    company: {
      ...data.company,
      marketCap: freePriceData.marketCap ?? data.company.marketCap,
      exchange: freePriceData.exchange ?? data.company.exchange,
      sector: freePriceData.sector ?? data.company.sector,
      industry: freePriceData.industry ?? data.company.industry,
    },
    quote: {
      ...data.quote,
      price: freePriceData.price,
      change: freePriceData.change,
      changePercent: freePriceData.changePercent,
      lastUpdated: `Last available ${freePriceData.lastTradingDate}`,
      source: freePriceData.source,
      freshness: freePriceData.source.includes("Nasdaq") ? "delayed" : "end_of_day",
    },
    priceHistory: compressHistoryForChart(freePriceData.history),
    dataNotice: {
      label: "Free public market data",
      detail:
        "Price, chart, market cap, sector, and industry are pulled from a free public source and may be delayed, end-of-day, rate-limited, or unavailable. Fundamentals and report text are still mocked.",
      sourceUrl: freePriceData.sourceUrl,
    },
  };
}

function compressHistoryForChart(history: DashboardData["priceHistory"]) {
  if (history.length <= 80) return history;
  const step = Math.ceil(history.length / 80);
  return history.filter((_, index) => index % step === 0 || index === history.length - 1);
}

type MockProfile = {
  name: string;
  description: string;
  sector: string;
  industry: string;
  ceo: string;
  marketCap: number;
  employees?: number;
  website?: string;
  price: number;
  change: number;
  revenue: string;
  revenueGrowth: string;
  margin: string;
  marginChange?: string;
  operatingMargin: string;
  operatingChange?: string;
  netIncome: string;
  incomeChange?: string;
  fcf: string;
  fcfChange?: string;
  cash: string;
  debt: string;
  ps: string;
  pe: string;
  evSales: string;
  valuationNote?: string;
  theme: string;
  bull: string;
  bear: string;
  peers: string[];
  partnerships: DashboardData["partnerships"];
  segments: string[];
  endMarkets: string[];
  revenueBase: number;
  revenueSlope: number;
  grossBase: number;
  grossSlope: number;
  operatingBase: number;
  operatingSlope: number;
  scores: [number, number, number, number, number];
  label: string;
};

const mockProfiles: Record<string, MockProfile> = {
  NVDA: {
    name: "NVIDIA Corporation",
    description: mockDashboard.company.description,
    sector: "Technology",
    industry: "Semiconductors",
    ceo: "Jensen Huang",
    marketCap: 2920000000000,
    employees: 29600,
    website: "https://www.nvidia.com",
    price: 119.44,
    change: 2.18,
    revenue: "$130.5B",
    revenueGrowth: "+114% YoY",
    margin: "75.0%",
    marginChange: "+2.3 pts",
    operatingMargin: "62.4%",
    operatingChange: "+8.7 pts",
    netIncome: "$72.9B",
    fcf: "$60.9B",
    cash: "$43.2B",
    debt: "$10.3B",
    ps: "22.4x",
    pe: "40.1x",
    evSales: "21.8x",
    valuationNote: "Premium",
    theme: "AI data center",
    bull: "AI infrastructure demand can remain structurally strong if model scaling and enterprise deployment continue.",
    bear: "A premium valuation could compress if growth normalizes faster than investors expect.",
    peers: ["AMD", "AVGO", "MRVL", "ANET"],
    partnerships: [
      {
        ticker: "CRWV",
        name: "CoreWeave",
        relationship: "AI cloud infrastructure collaboration",
        description:
          "NVIDIA and CoreWeave announced an expanded collaboration in January 2026 to accelerate AI factory buildouts, with CoreWeave adopting NVIDIA platforms and NVIDIA investing in CoreWeave.",
        importance: "high",
        sourceLabel: "NVIDIA Newsroom, Jan 26 2026",
        sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-and-coreweave-strengthen-collaboration-to-accelerate-buildout-of-ai-factories",
      },
      {
        ticker: "SMCI",
        name: "Supermicro",
        relationship: "AI server platform ecosystem",
        description: "Supermicro is part of the server ecosystem that integrates NVIDIA accelerators into production AI infrastructure.",
        importance: "medium",
        sourceLabel: "Research map",
      },
      {
        ticker: "MSFT",
        name: "Microsoft",
        relationship: "Cloud infrastructure customer",
        description: "Microsoft Azure demand is a major category of end-market exposure for NVIDIA AI accelerators and networking.",
        importance: "high",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Data Center", "Gaming", "Professional Visualization", "Automotive"],
    endMarkets: ["Cloud hyperscalers", "AI labs", "Enterprise AI buyers", "Gaming users"],
    revenueBase: 16.7,
    revenueSlope: 1.7,
    grossBase: 62.3,
    grossSlope: 3.2,
    operatingBase: 27.2,
    operatingSlope: 8.8,
    scores: [94, 92, 78, 88, 84],
    label: "Strong but monitor valuation/risk",
  },
  AMD: {
    name: "Advanced Micro Devices",
    description: "AMD designs CPUs, GPUs, adaptive SoCs, and data center accelerators used across cloud, enterprise, PC, gaming, and embedded markets.",
    sector: "Technology",
    industry: "Semiconductors",
    ceo: "Lisa Su",
    marketCap: 240000000000,
    price: 147.22,
    change: -1.34,
    revenue: "$25.8B",
    revenueGrowth: "+14% YoY",
    margin: "51.2%",
    operatingMargin: "12.8%",
    netIncome: "$1.6B",
    fcf: "$2.1B",
    cash: "$6.0B",
    debt: "$3.0B",
    ps: "9.5x",
    pe: "48.0x",
    evSales: "9.2x",
    valuationNote: "Growth premium",
    theme: "AI accelerators",
    bull: "AI accelerator adoption and server CPU share gains can expand data center revenue.",
    bear: "Competition from NVIDIA and custom silicon could pressure pricing and share assumptions.",
    peers: ["NVDA", "AVGO", "MRVL", "INTC"],
    partnerships: [
      {
        ticker: "MSFT",
        name: "Microsoft",
        relationship: "Cloud and silicon collaboration",
        description: "AMD works with cloud providers and OEMs to deploy EPYC CPUs and Instinct accelerators in data-center workloads.",
        importance: "medium",
        sourceLabel: "Research map",
      },
      {
        ticker: "HPE",
        name: "Hewlett Packard Enterprise",
        relationship: "Server channel",
        description: "OEM server partners package AMD CPUs and accelerators for enterprise and HPC deployments.",
        importance: "medium",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Data Center", "Client", "Gaming", "Embedded"],
    endMarkets: ["Cloud", "Enterprise servers", "PCs", "Gaming consoles"],
    revenueBase: 16.4,
    revenueSlope: 0.14,
    grossBase: 44.5,
    grossSlope: 1.5,
    operatingBase: 8.5,
    operatingSlope: 1.2,
    scores: [76, 78, 67, 72, 69],
    label: "Mixed profile / needs more research",
  },
  CRDO: {
    name: "Credo Technology Group",
    description: "Credo supplies high-speed connectivity products including optical DSPs, SerDes chiplets, active electrical cables, and networking IP for data infrastructure.",
    sector: "Technology",
    industry: "Semiconductor connectivity",
    ceo: "Bill Brennan",
    marketCap: 10600000000,
    price: 63.7,
    change: 3.42,
    revenue: "$193M",
    revenueGrowth: "+64% YoY",
    margin: "63.4%",
    operatingMargin: "-3.8%",
    netIncome: "-$16M",
    fcf: "-$8M",
    cash: "$383M",
    debt: "$0M",
    ps: "54.9x",
    pe: "N/M",
    evSales: "52.6x",
    valuationNote: "Very high growth multiple",
    theme: "AI networking",
    bull: "AI cluster bandwidth demand can drive adoption of high-speed connectivity and optical products.",
    bear: "Valuation embeds large growth assumptions while profitability is still developing.",
    peers: ["MRVL", "AVGO", "ANET", "AAOI"],
    partnerships: [
      {
        ticker: "MSFT",
        name: "Microsoft",
        relationship: "AI networking customer exposure",
        description: "Credo's connectivity products are positioned around hyperscale AI cluster bandwidth demand.",
        importance: "medium",
        sourceLabel: "Research map",
      },
      {
        ticker: "AVGO",
        name: "Broadcom",
        relationship: "Ecosystem / competitor",
        description: "Both companies participate in data-center connectivity and custom silicon ecosystems.",
        importance: "medium",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Optical DSP", "AEC", "SerDes IP", "Line cards"],
    endMarkets: ["AI clusters", "Hyperscale data centers", "Networking OEMs"],
    revenueBase: 0.1,
    revenueSlope: 0.55,
    grossBase: 58.4,
    grossSlope: 1.2,
    operatingBase: -28.0,
    operatingSlope: 6.1,
    scores: [58, 87, 91, 74, 82],
    label: "Speculative high-growth profile",
  },
  PLAB: {
    name: "Photronics",
    description: "Photronics manufactures photomasks used in semiconductor and flat panel display production.",
    sector: "Technology",
    industry: "Photomasks",
    ceo: "Frank Lee",
    marketCap: 1800000000,
    price: 28.14,
    change: 0.22,
    revenue: "$892M",
    revenueGrowth: "+3% YoY",
    margin: "37.6%",
    operatingMargin: "25.5%",
    netIncome: "$146M",
    fcf: "$104M",
    cash: "$550M",
    debt: "$20M",
    ps: "2.0x",
    pe: "12.5x",
    evSales: "1.4x",
    valuationNote: "Lower multiple",
    theme: "Semicap supply chain",
    bull: "Photomask demand can benefit from semiconductor complexity and regional fab investment.",
    bear: "Growth may be cyclical and tied to customer capex and display-market demand.",
    peers: ["AMAT", "KLAC", "ASML", "NVDA"],
    partnerships: [
      {
        ticker: "TSM",
        name: "TSMC ecosystem",
        relationship: "Foundry supply chain exposure",
        description: "Photomasks are used by semiconductor manufacturers and foundries as part of chip fabrication workflows.",
        importance: "medium",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Integrated circuit photomasks", "Flat panel display photomasks"],
    endMarkets: ["Foundries", "IDMs", "Display manufacturers"],
    revenueBase: 0.65,
    revenueSlope: 0.08,
    grossBase: 32.1,
    grossSlope: 1.1,
    operatingBase: 18.4,
    operatingSlope: 1.4,
    scores: [72, 48, 33, 86, 52],
    label: "Value profile with cyclical risk",
  },
  OKLO: {
    name: "Oklo Inc.",
    description: "Oklo is developing advanced fission power plants and fuel recycling capabilities for clean, reliable energy customers.",
    sector: "Energy",
    industry: "Advanced nuclear",
    ceo: "Jacob DeWitte",
    marketCap: 7200000000,
    price: 54.18,
    change: -2.7,
    revenue: "$0M",
    revenueGrowth: "Pre-revenue",
    margin: "N/M",
    operatingMargin: "N/M",
    netIncome: "-$63M",
    fcf: "-$78M",
    cash: "$275M",
    debt: "$0M",
    ps: "N/M",
    pe: "N/M",
    evSales: "N/M",
    valuationNote: "Milestone-driven",
    theme: "Nuclear energy",
    bull: "Power demand from AI data centers could increase interest in firm clean generation.",
    bear: "Commercialization, licensing, and funding timelines are uncertain.",
    peers: ["SMR", "CEG", "VST", "GEV"],
    partnerships: [
      {
        name: "Data center power buyers",
        relationship: "Potential customer category",
        description: "Advanced nuclear developers are increasingly framed around future firm power demand from AI data centers and industrial load.",
        importance: "medium",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Advanced reactors", "Fuel recycling", "Power purchase agreements"],
    endMarkets: ["Data centers", "Industrial power", "Utilities"],
    revenueBase: 0,
    revenueSlope: 0.02,
    grossBase: 0,
    grossSlope: 0,
    operatingBase: -85,
    operatingSlope: 8,
    scores: [32, 76, 88, 58, 74],
    label: "Speculative milestone-driven profile",
  },
  MRVL: {
    name: "Marvell Technology",
    description: "Marvell provides data infrastructure semiconductors across networking, storage, optical, security, and custom silicon markets.",
    sector: "Technology",
    industry: "Data infrastructure semiconductors",
    ceo: "Matt Murphy",
    marketCap: 62000000000,
    price: 71.36,
    change: 1.07,
    revenue: "$5.5B",
    revenueGrowth: "+7% YoY",
    margin: "61.0%",
    operatingMargin: "19.8%",
    netIncome: "$580M",
    fcf: "$1.1B",
    cash: "$950M",
    debt: "$4.2B",
    ps: "10.7x",
    pe: "38.5x",
    evSales: "11.2x",
    valuationNote: "AI recovery premium",
    theme: "AI networking",
    bull: "Custom silicon and optical networking can benefit from AI data center buildouts.",
    bear: "Non-AI end markets and leverage can weigh on the recovery profile.",
    peers: ["AVGO", "CRDO", "ANET", "NVDA"],
    partnerships: [
      {
        ticker: "AMZN",
        name: "Amazon / AWS ecosystem",
        relationship: "Cloud custom silicon exposure",
        description: "Marvell participates in custom silicon and data infrastructure markets serving large cloud customers.",
        importance: "medium",
        sourceLabel: "Research map",
      },
      {
        ticker: "NOK",
        name: "Networking OEMs",
        relationship: "Infrastructure channel",
        description: "Networking and carrier infrastructure vendors are important end markets for Marvell silicon.",
        importance: "medium",
        sourceLabel: "Research map",
      },
    ],
    segments: ["Data center", "Carrier infrastructure", "Enterprise networking", "Automotive"],
    endMarkets: ["Cloud", "Networking OEMs", "Storage", "Telecom"],
    revenueBase: 4.5,
    revenueSlope: 0.08,
    grossBase: 58.1,
    grossSlope: 0.7,
    operatingBase: 15.2,
    operatingSlope: 1.2,
    scores: [68, 73, 66, 57, 65],
    label: "Mixed profile / needs more research",
  },
  CRWV: {
    name: "CoreWeave",
    description:
      "CoreWeave is an AI cloud infrastructure provider that rents high-performance GPU compute capacity for training, inference, and enterprise AI workloads.",
    sector: "Technology",
    industry: "AI cloud infrastructure",
    ceo: "Michael Intrator",
    marketCap: 42000000000,
    price: 87.2,
    change: 3.4,
    revenue: "$2.3B",
    revenueGrowth: "+90% YoY",
    margin: "68.0%",
    operatingMargin: "12.0%",
    netIncome: "-$850M",
    fcf: "-$2.4B",
    cash: "$1.5B",
    debt: "$9.0B",
    ps: "18.2x",
    pe: "N/M",
    evSales: "22.0x",
    valuationNote: "AI infrastructure premium",
    theme: "AI cloud infrastructure",
    bull: "Demand for GPU capacity from AI labs and enterprises can support rapid revenue growth.",
    bear: "Capital intensity, customer concentration, and dependency on NVIDIA supply create high execution risk.",
    peers: ["NVDA", "MSFT", "AMZN", "GOOGL"],
    partnerships: [
      {
        ticker: "NVDA",
        name: "NVIDIA",
        relationship: "Strategic infrastructure collaboration",
        description:
          "NVIDIA and CoreWeave expanded their collaboration in January 2026 to accelerate AI factory buildouts; NVIDIA also invested $2 billion in CoreWeave Class A stock.",
        importance: "high",
        sourceLabel: "NVIDIA Newsroom, Jan 26 2026",
        sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-and-coreweave-strengthen-collaboration-to-accelerate-buildout-of-ai-factories",
      },
      {
        ticker: "OPENAI",
        name: "OpenAI",
        relationship: "AI compute customer",
        description:
          "CoreWeave announced an expanded OpenAI agreement in September 2025, bringing total disclosed contract value to approximately $22.4 billion.",
        importance: "high",
        sourceLabel: "CoreWeave investor release, Sep 25 2025",
        sourceUrl: "https://investors.coreweave.com/news/news-details/2025/CoreWeave-Expands-Agreement-with-OpenAI-by-up-to-6-5B/default.aspx",
      },
      {
        name: "Poolside",
        relationship: "AI cloud services partnership",
        description:
          "CoreWeave announced a partnership with Poolside in October 2025 to provide AI cloud services powered by NVIDIA GB300 NVL72 systems.",
        importance: "medium",
        sourceLabel: "CoreWeave release, Oct 15 2025",
        sourceUrl: "https://www.coreweave.com/news/coreweave-announces-partnership-with-foundation-model-company-poolside-to-deliver-ai-cloud-services",
      },
    ],
    segments: ["AI cloud compute", "GPU clusters", "Managed AI infrastructure"],
    endMarkets: ["AI labs", "Enterprise AI", "Cloud platforms", "Model inference"],
    revenueBase: 0.23,
    revenueSlope: 0.85,
    grossBase: 52.0,
    grossSlope: 4.0,
    operatingBase: -30.0,
    operatingSlope: 10.5,
    scores: [46, 91, 86, 34, 79],
    label: "Speculative high-growth AI infrastructure profile",
  },
};

const mockNewsHooks = [
  "demand checks move the watchlist",
  "valuation debate sharpens around the next catalyst",
  "peer read-through highlights what matters next",
];

function formatMockCap(value: number) {
  if (value >= 1_000_000_000_000) return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
  return `$${(value / 1_000_000).toFixed(0)}M`;
}

function defaultPartnerships(ticker: string, profile: MockProfile): DashboardData["partnerships"] {
  return [
    {
      name: `${profile.theme} ecosystem`,
      relationship: "Customer / supplier ecosystem",
      description: `${ticker} does business across the ${profile.theme.toLowerCase()} ecosystem. Live filings and news integrations will replace this curated placeholder with source-backed relationships.`,
      importance: "medium",
      sourceLabel: "Research map",
    },
  ];
}
