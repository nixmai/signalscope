export type Sentiment = "positive" | "negative" | "neutral";
export type RiskSeverity = "low" | "medium" | "high";

export type CompanyProfile = {
  ticker: string;
  name: string;
  exchange: string;
  sector: string;
  industry: string;
  marketCap: number;
  website: string;
  description: string;
  ceo: string;
  country: string;
  employees: number;
};

export type PricePoint = {
  date: string;
  close: number;
  volume: number;
};

export type FinancialMetric = {
  label: string;
  value: string;
  change: string;
  status: "up" | "down" | "flat";
};

export type RevenueMarginPoint = {
  period: string;
  revenue: number;
  grossMargin: number;
  operatingMargin: number;
};

export type Competitor = {
  ticker: string;
  name: string;
  marketCap: string;
  revenueGrowth: string;
  psRatio: string;
  relationshipType: string;
  whyItCompetes: string;
};

export type NewsArticle = {
  title: string;
  source: string;
  date: string;
  sentiment: Sentiment;
  whyItMatters: string;
  url: string;
};

export type Filing = {
  formType: string;
  filedAt: string;
  summary: string;
  url: string;
};

export type Risk = {
  risk: string;
  severity: RiskSeverity;
  explanation: string;
};

export type ThemeExposure = {
  theme: string;
  exposureLevel: RiskSeverity;
  reason: string;
};

export type Catalyst = {
  catalyst: string;
  timeframe: string;
  whyItMatters: string;
};

export type ResearchVerdict = {
  summary: string;
  qualityScore: number;
  growthScore: number;
  valuationRiskScore: number;
  balanceSheetScore: number;
  momentumScore: number;
  overallResearchScore: number;
  label: string;
};

export type ResearchReport = {
  executiveSummary: string[];
  biggestBullPoint: string;
  biggestBearPoint: string;
  businessOverview: {
    whatTheyDo: string;
    howTheyMakeMoney: string;
    mainSegments: string[];
    keyCustomersOrEndMarkets: string[];
  };
  valuation: {
    summary: string;
    relativeValuation: string;
    expensiveOrCheapVsPeers: string;
  };
  bullCase: string[];
  bearCase: string[];
  risks: Risk[];
  catalysts: Catalyst[];
  themeExposure: ThemeExposure[];
  researchVerdict: ResearchVerdict;
  questionsToResearchFurther: string[];
};

export type DashboardData = {
  company: CompanyProfile;
  quote: {
    price: number;
    change: number;
    changePercent: number;
    lastUpdated: string;
    currency: string;
  };
  priceHistory: PricePoint[];
  financialMetrics: FinancialMetric[];
  revenueMargins: RevenueMarginPoint[];
  competitors: Competitor[];
  news: NewsArticle[];
  filings: Filing[];
  report: ResearchReport;
};
