export type SectorStock = {
  ticker: string;
  name: string;
  weight: number;
  change: number;
  marketCap: string;
  note: string;
};

export type SectorGroup = {
  slug: string;
  name: string;
  description: string;
  stocks: SectorStock[];
};

export type HeatMapTile = {
  ticker: string;
  name: string;
  change: number;
  weight: number;
};

export type HeatMapGroup = {
  slug: string;
  name: string;
  description: string;
  tiles: HeatMapTile[];
};

export const sectors: SectorGroup[] = [
  {
    slug: "technology",
    name: "Technology",
    description: "Software, semiconductors, AI infrastructure, hardware platforms, and data-center supply chains.",
    stocks: [
      { ticker: "NVDA", name: "NVIDIA", weight: 10.8, change: 5.77, marketCap: "$5.05T", note: "AI accelerators and platform infrastructure" },
      { ticker: "MSFT", name: "Microsoft", weight: 9.1, change: 1.42, marketCap: "$3.7T", note: "Cloud, enterprise software, AI platforms" },
      { ticker: "AAPL", name: "Apple", weight: 7.4, change: -0.34, marketCap: "$3.1T", note: "Consumer hardware and services" },
      { ticker: "AVGO", name: "Broadcom", weight: 4.0, change: 2.18, marketCap: "$1.4T", note: "Custom silicon and infrastructure software" },
      { ticker: "AMD", name: "Advanced Micro Devices", weight: 1.8, change: -0.91, marketCap: "$240B", note: "CPUs, GPUs, data-center accelerators" },
      { ticker: "CRWV", name: "CoreWeave", weight: 0.8, change: 3.22, marketCap: "$42B", note: "AI cloud infrastructure and GPU capacity" },
    ],
  },
  {
    slug: "communication-services",
    name: "Communication Services",
    description: "Digital advertising, streaming, social platforms, search, telecom, and content networks.",
    stocks: [
      { ticker: "GOOGL", name: "Alphabet", weight: 6.2, change: 0.88, marketCap: "$2.5T", note: "Search, YouTube, cloud, AI models" },
      { ticker: "META", name: "Meta Platforms", weight: 4.9, change: 1.65, marketCap: "$1.8T", note: "Social platforms, ads, AI infrastructure" },
      { ticker: "NFLX", name: "Netflix", weight: 1.0, change: -0.44, marketCap: "$430B", note: "Streaming entertainment" },
      { ticker: "TMUS", name: "T-Mobile US", weight: 0.9, change: 0.21, marketCap: "$270B", note: "Wireless telecom" },
    ],
  },
  {
    slug: "consumer-discretionary",
    name: "Consumer Discretionary",
    description: "E-commerce, autos, restaurants, travel, apparel, and cyclical consumer demand.",
    stocks: [
      { ticker: "AMZN", name: "Amazon", weight: 4.2, change: 1.12, marketCap: "$2.4T", note: "E-commerce, cloud, ads, logistics" },
      { ticker: "TSLA", name: "Tesla", weight: 1.6, change: -2.18, marketCap: "$980B", note: "EVs, autonomy, energy storage" },
      { ticker: "HD", name: "Home Depot", weight: 0.9, change: 0.36, marketCap: "$390B", note: "Home improvement retail" },
      { ticker: "MCD", name: "McDonald's", weight: 0.7, change: 0.08, marketCap: "$220B", note: "Global restaurants" },
    ],
  },
  {
    slug: "financials",
    name: "Financials",
    description: "Banks, payments, brokers, insurers, asset managers, and capital markets.",
    stocks: [
      { ticker: "JPM", name: "JPMorgan Chase", weight: 1.5, change: 0.62, marketCap: "$760B", note: "Banking and capital markets" },
      { ticker: "V", name: "Visa", weight: 1.3, change: 0.44, marketCap: "$690B", note: "Global payments network" },
      { ticker: "MA", name: "Mastercard", weight: 1.0, change: 0.51, marketCap: "$510B", note: "Payments network" },
      { ticker: "BAC", name: "Bank of America", weight: 0.7, change: -0.12, marketCap: "$360B", note: "Consumer and corporate banking" },
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    description: "Oil, gas, refining, LNG, energy services, and emerging power infrastructure.",
    stocks: [
      { ticker: "XOM", name: "Exxon Mobil", weight: 1.2, change: -0.32, marketCap: "$520B", note: "Integrated oil and gas" },
      { ticker: "CVX", name: "Chevron", weight: 0.8, change: -0.44, marketCap: "$310B", note: "Integrated oil and gas" },
      { ticker: "SLB", name: "SLB", weight: 0.3, change: 0.76, marketCap: "$65B", note: "Energy services" },
      { ticker: "OKLO", name: "Oklo", weight: 0.1, change: -4.98, marketCap: "$7B", note: "Advanced nuclear power" },
    ],
  },
  {
    slug: "health-care",
    name: "Health Care",
    description: "Pharma, biotech, medtech, providers, managed care, and life-science tools.",
    stocks: [
      { ticker: "LLY", name: "Eli Lilly", weight: 2.0, change: 1.03, marketCap: "$960B", note: "Pharma and obesity/diabetes therapies" },
      { ticker: "UNH", name: "UnitedHealth", weight: 0.9, change: -0.68, marketCap: "$440B", note: "Managed care and health services" },
      { ticker: "JNJ", name: "Johnson & Johnson", weight: 0.8, change: 0.18, marketCap: "$380B", note: "Pharma and medtech" },
      { ticker: "ABBV", name: "AbbVie", weight: 0.7, change: 0.29, marketCap: "$350B", note: "Pharma" },
    ],
  },
  {
    slug: "consumer-staples",
    name: "Consumer Staples",
    description: "Food, beverages, household products, discount retail, and defensive consumption.",
    stocks: [
      { ticker: "WMT", name: "Walmart", weight: 1.1, change: 0.48, marketCap: "$780B", note: "Discount retail and grocery" },
      { ticker: "COST", name: "Costco", weight: 0.9, change: 0.72, marketCap: "$430B", note: "Membership warehouse retail" },
      { ticker: "PG", name: "Procter & Gamble", weight: 0.8, change: -0.08, marketCap: "$390B", note: "Household and personal care" },
      { ticker: "KO", name: "Coca-Cola", weight: 0.6, change: 0.13, marketCap: "$300B", note: "Beverages" },
    ],
  },
];

export const indexHeatmaps: HeatMapGroup[] = [
  {
    slug: "sp500",
    name: "S&P 500",
    description: "Large-cap U.S. equity leadership across all major sectors.",
    tiles: [
      { ticker: "NVDA", name: "NVIDIA", change: 5.77, weight: 10.8 },
      { ticker: "MSFT", name: "Microsoft", change: 1.42, weight: 9.1 },
      { ticker: "AAPL", name: "Apple", change: -0.34, weight: 7.4 },
      { ticker: "AMZN", name: "Amazon", change: 1.12, weight: 4.2 },
      { ticker: "META", name: "Meta", change: 1.65, weight: 4.9 },
      { ticker: "GOOGL", name: "Alphabet", change: 0.88, weight: 3.6 },
      { ticker: "AVGO", name: "Broadcom", change: 2.18, weight: 4.0 },
      { ticker: "JPM", name: "JPMorgan", change: 0.62, weight: 1.5 },
      { ticker: "LLY", name: "Eli Lilly", change: 1.03, weight: 2.0 },
      { ticker: "TSLA", name: "Tesla", change: -2.18, weight: 1.6 },
    ],
  },
  {
    slug: "nasdaq",
    name: "Nasdaq 100",
    description: "Growth-heavy technology, internet, semiconductor, and platform leaders.",
    tiles: [
      { ticker: "NVDA", name: "NVIDIA", change: 5.77, weight: 12.2 },
      { ticker: "MSFT", name: "Microsoft", change: 1.42, weight: 8.8 },
      { ticker: "AAPL", name: "Apple", change: -0.34, weight: 8.1 },
      { ticker: "AVGO", name: "Broadcom", change: 2.18, weight: 5.1 },
      { ticker: "AMD", name: "AMD", change: -0.91, weight: 1.6 },
      { ticker: "ADBE", name: "Adobe", change: -1.22, weight: 1.0 },
      { ticker: "NFLX", name: "Netflix", change: -0.44, weight: 1.2 },
      { ticker: "COST", name: "Costco", change: 0.72, weight: 1.1 },
    ],
  },
  {
    slug: "russell-2000",
    name: "Russell 2000",
    description: "Small-cap breadth, financials, industrials, biotech, and cyclical exposure.",
    tiles: [
      { ticker: "CRWV", name: "CoreWeave", change: 3.22, weight: 1.2 },
      { ticker: "SMR", name: "NuScale", change: -3.34, weight: 0.5 },
      { ticker: "AAOI", name: "Applied Optoelectronics", change: 2.74, weight: 0.2 },
      { ticker: "PLAB", name: "Photronics", change: 0.78, weight: 0.3 },
      { ticker: "OKLO", name: "Oklo", change: -4.98, weight: 0.4 },
      { ticker: "LITE", name: "Lumentum", change: 1.92, weight: 0.5 },
    ],
  },
  {
    slug: "dow-jones",
    name: "Dow Jones",
    description: "Price-weighted blue-chip industrial, financial, consumer, and technology bellwethers.",
    tiles: [
      { ticker: "MSFT", name: "Microsoft", change: 1.42, weight: 8.6 },
      { ticker: "GS", name: "Goldman Sachs", change: 0.53, weight: 7.2 },
      { ticker: "CAT", name: "Caterpillar", change: -0.22, weight: 5.1 },
      { ticker: "AMGN", name: "Amgen", change: 0.19, weight: 4.4 },
      { ticker: "HD", name: "Home Depot", change: 0.36, weight: 4.3 },
      { ticker: "MCD", name: "McDonald's", change: 0.08, weight: 3.8 },
    ],
  },
];

export const etfHeatmaps: HeatMapGroup[] = [
  {
    slug: "sector-etfs",
    name: "Sector ETFs",
    description: "Major SPDR-style sector funds and broad thematic ETF proxies.",
    tiles: [
      { ticker: "XLK", name: "Technology", change: 2.14, weight: 12 },
      { ticker: "XLC", name: "Communication Services", change: 1.18, weight: 8 },
      { ticker: "XLY", name: "Consumer Discretionary", change: 0.44, weight: 7 },
      { ticker: "XLF", name: "Financials", change: 0.31, weight: 6 },
      { ticker: "XLE", name: "Energy", change: -0.52, weight: 5 },
      { ticker: "XLP", name: "Consumer Staples", change: 0.16, weight: 4 },
      { ticker: "XLV", name: "Health Care", change: 0.28, weight: 6 },
      { ticker: "XLI", name: "Industrials", change: -0.11, weight: 5 },
      { ticker: "XLB", name: "Materials", change: -0.26, weight: 3 },
      { ticker: "XLU", name: "Utilities", change: 0.09, weight: 3 },
      { ticker: "XLRE", name: "Real Estate", change: -0.18, weight: 2 },
      { ticker: "IGV", name: "Software", change: 1.37, weight: 5 },
      { ticker: "SMH", name: "Semiconductors", change: 3.12, weight: 8 },
    ],
  },
];

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}

export function sectorSlug(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
