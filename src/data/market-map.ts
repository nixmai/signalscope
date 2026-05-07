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

const sectorExpansions: Record<string, SectorStock[]> = {
  technology: [
    { ticker: "ORCL", name: "Oracle", weight: 1.4, change: 4.68, marketCap: "$430B", note: "Cloud infrastructure and database software" },
    { ticker: "CRM", name: "Salesforce", weight: 0.9, change: -1.56, marketCap: "$285B", note: "Enterprise SaaS and AI workflows" },
    { ticker: "NOW", name: "ServiceNow", weight: 0.7, change: -0.82, marketCap: "$210B", note: "Enterprise workflow software" },
    { ticker: "ADBE", name: "Adobe", weight: 0.8, change: -1.22, marketCap: "$190B", note: "Creative and document software" },
    { ticker: "CSCO", name: "Cisco", weight: 0.7, change: -2.82, marketCap: "$250B", note: "Networking equipment and security" },
    { ticker: "MU", name: "Micron", weight: 0.5, change: 4.12, marketCap: "$160B", note: "Memory and storage semiconductors" },
    { ticker: "INTC", name: "Intel", weight: 0.4, change: 4.49, marketCap: "$145B", note: "CPUs, foundry, and semiconductors" },
    { ticker: "QCOM", name: "Qualcomm", weight: 0.6, change: 3.23, marketCap: "$210B", note: "Mobile and edge AI chips" },
    { ticker: "ANET", name: "Arista Networks", weight: 0.5, change: -13.6, marketCap: "$112B", note: "Cloud networking" },
    { ticker: "DELL", name: "Dell Technologies", weight: 0.4, change: 1.3, marketCap: "$95B", note: "Servers, PCs, AI infrastructure" },
    { ticker: "SMCI", name: "Supermicro", weight: 0.3, change: 2.47, marketCap: "$45B", note: "AI server systems" },
    { ticker: "LITE", name: "Lumentum", weight: 0.2, change: 1.92, marketCap: "$6B", note: "Optical components" },
    { ticker: "AAOI", name: "Applied Optoelectronics", weight: 0.2, change: 2.74, marketCap: "$1B", note: "Optical networking components" },
    { ticker: "PLAB", name: "Photronics", weight: 0.2, change: 0.78, marketCap: "$1.8B", note: "Photomasks" },
    { ticker: "MRVL", name: "Marvell", weight: 0.6, change: 1.5, marketCap: "$62B", note: "Data infrastructure semiconductors" },
    { ticker: "CRDO", name: "Credo", weight: 0.2, change: 3.9, marketCap: "$10B", note: "AI networking connectivity" },
  ],
  "communication-services": [
    { ticker: "GOOG", name: "Alphabet Class C", weight: 3.5, change: 0.83, marketCap: "$2.5T", note: "Search and AI platforms" },
    { ticker: "DIS", name: "Disney", weight: 0.5, change: 0.64, marketCap: "$210B", note: "Media and entertainment" },
    { ticker: "CMCSA", name: "Comcast", weight: 0.3, change: -0.34, marketCap: "$150B", note: "Cable and media" },
    { ticker: "VZ", name: "Verizon", weight: 0.3, change: -0.19, marketCap: "$170B", note: "Telecom services" },
    { ticker: "T", name: "AT&T", weight: 0.3, change: 0.45, marketCap: "$160B", note: "Telecom services" },
    { ticker: "CHTR", name: "Charter", weight: 0.2, change: -1.1, marketCap: "$45B", note: "Broadband and cable" },
    { ticker: "EA", name: "Electronic Arts", weight: 0.2, change: 0.38, marketCap: "$40B", note: "Gaming" },
    { ticker: "TTWO", name: "Take-Two", weight: 0.2, change: 0.74, marketCap: "$32B", note: "Gaming" },
    { ticker: "SPOT", name: "Spotify", weight: 0.3, change: 1.82, marketCap: "$120B", note: "Audio streaming" },
    { ticker: "PINS", name: "Pinterest", weight: 0.1, change: -0.92, marketCap: "$25B", note: "Social discovery" },
  ],
  "consumer-discretionary": [
    { ticker: "BKNG", name: "Booking Holdings", weight: 0.6, change: 1.41, marketCap: "$180B", note: "Online travel" },
    { ticker: "SBUX", name: "Starbucks", weight: 0.4, change: -0.32, marketCap: "$105B", note: "Coffee retail" },
    { ticker: "NKE", name: "Nike", weight: 0.3, change: 0.59, marketCap: "$140B", note: "Athletic apparel" },
    { ticker: "LOW", name: "Lowe's", weight: 0.4, change: 0.27, marketCap: "$135B", note: "Home improvement" },
    { ticker: "TJX", name: "TJX Companies", weight: 0.4, change: -0.54, marketCap: "$130B", note: "Off-price retail" },
    { ticker: "ORLY", name: "O'Reilly Auto Parts", weight: 0.3, change: 0.84, marketCap: "$90B", note: "Auto parts retail" },
    { ticker: "AZO", name: "AutoZone", weight: 0.3, change: 0.46, marketCap: "$70B", note: "Auto parts retail" },
    { ticker: "RCL", name: "Royal Caribbean", weight: 0.2, change: 2.18, marketCap: "$65B", note: "Cruise travel" },
    { ticker: "ABNB", name: "Airbnb", weight: 0.3, change: -1.03, marketCap: "$85B", note: "Travel marketplace" },
    { ticker: "CMG", name: "Chipotle", weight: 0.3, change: 0.77, marketCap: "$75B", note: "Restaurants" },
  ],
  financials: [
    { ticker: "BRK.B", name: "Berkshire Hathaway", weight: 1.8, change: 0.93, marketCap: "$1.1T", note: "Insurance and conglomerate" },
    { ticker: "GS", name: "Goldman Sachs", weight: 0.5, change: 0.53, marketCap: "$180B", note: "Investment banking" },
    { ticker: "MS", name: "Morgan Stanley", weight: 0.5, change: 2.17, marketCap: "$190B", note: "Wealth and investment banking" },
    { ticker: "WFC", name: "Wells Fargo", weight: 0.5, change: 0.6, marketCap: "$260B", note: "Banking" },
    { ticker: "C", name: "Citigroup", weight: 0.4, change: -0.1, marketCap: "$160B", note: "Global banking" },
    { ticker: "AXP", name: "American Express", weight: 0.5, change: 1.8, marketCap: "$220B", note: "Payments and credit" },
    { ticker: "SCHW", name: "Charles Schwab", weight: 0.3, change: 1.2, marketCap: "$150B", note: "Brokerage and wealth" },
    { ticker: "BLK", name: "BlackRock", weight: 0.4, change: 0.9, marketCap: "$170B", note: "Asset management" },
    { ticker: "SPGI", name: "S&P Global", weight: 0.4, change: 0.7, marketCap: "$160B", note: "Financial data and ratings" },
    { ticker: "ICE", name: "Intercontinental Exchange", weight: 0.3, change: 0.42, marketCap: "$95B", note: "Exchanges and data" },
  ],
  energy: [
    { ticker: "COP", name: "ConocoPhillips", weight: 0.5, change: -0.61, marketCap: "$130B", note: "Exploration and production" },
    { ticker: "EOG", name: "EOG Resources", weight: 0.3, change: -0.28, marketCap: "$75B", note: "Oil and gas producer" },
    { ticker: "MPC", name: "Marathon Petroleum", weight: 0.3, change: -1.11, marketCap: "$60B", note: "Refining" },
    { ticker: "PSX", name: "Phillips 66", weight: 0.3, change: -0.83, marketCap: "$58B", note: "Refining and midstream" },
    { ticker: "LNG", name: "Cheniere", weight: 0.2, change: 0.18, marketCap: "$55B", note: "LNG infrastructure" },
    { ticker: "VST", name: "Vistra", weight: 0.3, change: 1.35, marketCap: "$58B", note: "Power generation" },
    { ticker: "CEG", name: "Constellation Energy", weight: 0.4, change: 0.91, marketCap: "$95B", note: "Nuclear and power" },
    { ticker: "GEV", name: "GE Vernova", weight: 0.3, change: 0.68, marketCap: "$120B", note: "Power equipment" },
  ],
  "health-care": [
    { ticker: "MRK", name: "Merck", weight: 0.7, change: 0.36, marketCap: "$260B", note: "Pharma" },
    { ticker: "PFE", name: "Pfizer", weight: 0.4, change: -0.43, marketCap: "$150B", note: "Pharma" },
    { ticker: "TMO", name: "Thermo Fisher", weight: 0.5, change: 0.52, marketCap: "$220B", note: "Life science tools" },
    { ticker: "ABT", name: "Abbott", weight: 0.5, change: -0.18, marketCap: "$230B", note: "Medtech and diagnostics" },
    { ticker: "ISRG", name: "Intuitive Surgical", weight: 0.4, change: 0.94, marketCap: "$210B", note: "Robotic surgery" },
    { ticker: "DHR", name: "Danaher", weight: 0.4, change: -0.25, marketCap: "$180B", note: "Life sciences" },
    { ticker: "AMGN", name: "Amgen", weight: 0.4, change: 0.19, marketCap: "$160B", note: "Biotech" },
    { ticker: "GILD", name: "Gilead", weight: 0.3, change: 0.44, marketCap: "$130B", note: "Biopharma" },
  ],
  "consumer-staples": [
    { ticker: "PEP", name: "PepsiCo", weight: 0.6, change: 0.2, marketCap: "$240B", note: "Beverages and snacks" },
    { ticker: "PM", name: "Philip Morris", weight: 0.5, change: 0.59, marketCap: "$240B", note: "Tobacco and reduced-risk products" },
    { ticker: "MO", name: "Altria", weight: 0.3, change: 0.18, marketCap: "$95B", note: "Tobacco" },
    { ticker: "MDLZ", name: "Mondelez", weight: 0.3, change: -0.14, marketCap: "$85B", note: "Snacks" },
    { ticker: "CL", name: "Colgate-Palmolive", weight: 0.3, change: 0.1, marketCap: "$75B", note: "Household products" },
    { ticker: "KMB", name: "Kimberly-Clark", weight: 0.2, change: -0.06, marketCap: "$45B", note: "Household products" },
    { ticker: "KHC", name: "Kraft Heinz", weight: 0.2, change: 0.22, marketCap: "$40B", note: "Packaged food" },
    { ticker: "TGT", name: "Target", weight: 0.2, change: -0.55, marketCap: "$55B", note: "Retail" },
  ],
};

for (const sector of sectors) {
  sector.stocks.push(...(sectorExpansions[sector.slug] ?? []));
}

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

export const heatmapTabs = [
  { slug: "sp500", label: "S&P 500 Index", kind: "index" },
  { slug: "nasdaq", label: "Nasdaq 100", kind: "index" },
  { slug: "russell-2000", label: "Russell 2000", kind: "index" },
  { slug: "dow-jones", label: "Dow Jones", kind: "index" },
  { slug: "sector-etfs", label: "ETF Heatmap", kind: "etf" },
];

export function getHeatmapGroup(slug = "sp500") {
  return [...indexHeatmaps, ...etfHeatmaps].find((group) => group.slug === slug) ?? indexHeatmaps[0];
}

export function getHeatmapSectorGroups(slug = "sp500") {
  if (slug === "sector-etfs") {
    return [
      {
        name: "ETF groups",
        stocks: etfHeatmaps[0].tiles.map((tile) => ({
          ticker: tile.ticker,
          name: tile.name,
          weight: tile.weight,
          change: tile.change,
          marketCap: "ETF",
          note: "Exchange-traded fund",
        })),
      },
    ];
  }

  if (slug === "nasdaq") {
    return sectors
      .filter((sector) => ["Technology", "Communication Services", "Consumer Discretionary", "Consumer Staples"].includes(sector.name))
      .map((sector) => ({
        name: sector.name,
        stocks: sector.stocks.filter((stock) =>
          ["NVDA", "MSFT", "AAPL", "AVGO", "AMD", "ADBE", "NFLX", "COST", "GOOGL", "META", "AMZN", "TSLA", "ORCL", "QCOM", "CRWV"].includes(stock.ticker),
        ),
      }));
  }

  if (slug === "russell-2000") {
    return [
      {
        name: "Small-cap AI and infrastructure",
        stocks: sectors.flatMap((sector) => sector.stocks).filter((stock) => ["CRWV", "SMR", "AAOI", "PLAB", "OKLO", "LITE", "CRDO"].includes(stock.ticker)),
      },
    ];
  }

  if (slug === "dow-jones") {
    return [
      {
        name: "Dow industrials",
        stocks: sectors.flatMap((sector) => sector.stocks).filter((stock) => ["MSFT", "GS", "CAT", "AMGN", "HD", "MCD", "JPM", "AAPL", "V", "WMT"].includes(stock.ticker)),
      },
    ];
  }

  return sectors.map((sector) => ({
    name: sector.name,
    stocks: sector.stocks.slice(0, sector.slug === "technology" ? 18 : 12),
  }));
}

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}

export function sectorSlug(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
