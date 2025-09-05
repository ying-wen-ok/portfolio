/** @type {import('./index').Project} */
const project = {
  slug: "TradingStrategyBacktestingStatisticalValidation",
  title: "Trading Strategy Backtesting & Statistical Validation",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/TradingStrategyBacktestingStatisticalValidation/2.png",
  hero: "/images/TradingStrategyBacktestingStatisticalValidation/2.png",
  pdfFile: "",
  tags: ["Finance", "Statistics","ETL"],
  meta: {
    role: "Academic",
    stack: "Finance · Statistics · Backtesting",
    duration: "01/2020 - 05/2020",
    tools: "EXCEL", 
    links: []
  },

  desc: [
   "Background",
"Backtesting is a fundamental process in quantitative finance used to evaluate the performance of a trading strategy on historical data before applying it to live markets. It helps assess the profitability, risk profile, and robustness of a strategy.",

"Objective",
" · Implement a rule-based trading strategy and simulate its performance using historical asset price data.",
" · Measure profitability and risk metrics to assess the strategy’s viability.",
" · Apply statistical testing to determine if the observed performance is statistically significant.",

"Methodology",
" · Data Preparation: Collected and cleaned historical price data, ensuring accuracy and completeness.",
" · Strategy Implementation: Generated buy/sell signals based on predefined trading rules.",
" · Backtesting: Calculated returns, cumulative returns, Value-at-Risk (VaR) at 95% and 99% confidence levels, and exceptions on VaR breaches.",
" · Statistical Validation: Applied a binomial test to evaluate whether the number of VaR exceptions falls within the expected non-rejection region.",
" · Tools: Microsoft Excel (with VBA macros) for data processing, performance calculation, and statistical testing.",

"Results",
" · The backtest produced a profitable strategy with controlled risk exposure, as shown in the summary table.",
" · VaR exceptions were within the acceptable range for both 95% and 99% confidence levels.",
" · The binomial test confirmed that the observed exceptions were consistent with model expectations, indicating robustness.",
" · Performance metrics and statistical validation jointly supported the strategy’s effectiveness.",

"Key Takeaways",
" · Backtesting not only measures past performance but also highlights a strategy’s risk characteristics.",
" · Statistical tests such as the binomial test are essential for validating whether performance is due to skill or chance.",
" · Combining financial metrics with statistical rigor provides a stronger foundation for real-world strategy deployment."

    ],

  gallery: [
     "/images/TradingStrategyBacktestingStatisticalValidation/1.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/2.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/3.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/4.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/5.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/6.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/7.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/8.png",
    "/images/TradingStrategyBacktestingStatisticalValidation/9.png",
  ]
};

export default project;


