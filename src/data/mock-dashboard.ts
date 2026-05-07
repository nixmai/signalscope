import type { DashboardData } from "@/types/stock";

export const suggestedTickers = ["NVDA", "AMD", "PLAB", "CRDO", "MRVL", "OKLO", "AAOI", "SMCI"];

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
  return {
    ...mockDashboard,
    company: {
      ...mockDashboard.company,
      ticker: symbol.toUpperCase(),
      name: symbol.toUpperCase() === "NVDA" ? mockDashboard.company.name : `${symbol.toUpperCase()} Research Profile`,
    },
  };
}
