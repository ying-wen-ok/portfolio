/** @type {import('./index').Project} */
const project = {
  slug: "ModelValidationFamaFrench3FactorsModel",
  title: "Model Validation – Fama-French 3 Factors Model",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/ModelValidationFamaFrench3FactorsModel/cover.png",
  hero: "/images/ModelValidationFamaFrench3FactorsModel/cover.png",
  pdfFile: "/Model Validation – Fama-French 3 Factors Model.pdf",
  tags: ["Finance", "Statistics"],
  meta: {
    role: "Academic",
    stack: "Finance · Statistics · FamaFrench 3 Factors Model · Model Validation",
    duration: "01/2020 - 05/2020",
    tools: "", 
    links: []
  },

  desc: [
 "Background",
"The Fama-French 3 Factors Model is a widely used asset pricing model that expands on the Capital Asset Pricing Model (CAPM) by including size and value risk factors in addition to the market factor. This project validates the model using regression analysis on selected technology stocks and ETFs, and tests its robustness under special market conditions and noisy data scenarios.",

"Objective",
" · Estimate factor loadings (betas) for each stock/ETF using historical return data.",
" · Evaluate the model's explanatory power and statistical significance for each asset.",
" · Assess the model’s robustness during the COVID-19 pandemic period.",
" · Test model stability by adding noise to the data and observing changes in factor loadings and fit.",

"Methodology",
" · Data: Monthly returns for GOOG, FB, AMZN, TSLA, SPYG, and SPHD; Fama-French 3 factors data from Kenneth R. French’s online library.",
" · Regression Analysis: Multiple linear regression with excess returns as dependent variable and the three Fama-French factors as independent variables.",
" · Special Period Test: Subset analysis for the COVID-19 pandemic period to observe changes in factor loadings and model fit.",
" · Noise Robustness Test: Added controlled random noise to return data to evaluate parameter stability.",
" · Tools: Excel with statistical analysis functions.",

"Results",
" · For all assets, the market factor was highly significant, with varying significance for SMB (Small Minus Big) and HML (High Minus Low) factors.",
" · Growth-oriented assets like GOOG, FB, and AMZN showed negative loadings on HML, consistent with growth characteristics.",
" · The model’s explanatory power (R²) ranged from moderate to high across assets, with TSLA showing more idiosyncratic variation.",
" · Pandemic-period analysis revealed changes in factor sensitivities, especially higher market beta for certain tech stocks.",
" · Noise-added tests indicated that while coefficients varied slightly, the general factor relationships remained stable.",

"Key Takeaways",
" · The Fama-French 3 Factors Model captures significant risk exposures for both tech stocks and ETFs, with clear differences between growth and value profiles.",
" · Market shocks like the COVID-19 pandemic can alter factor loadings, highlighting the importance of time-specific validation.",
" · Robustness checks with noise confirm the stability of the model’s conclusions under small data perturbations."

    ],

  gallery: [
    //  "/images/TradingStrategyBacktestingStatisticalValidation/1.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/2.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/3.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/4.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/5.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/6.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/7.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/8.png",
    // "/images/TradingStrategyBacktestingStatisticalValidation/9.png",
  ]
};

export default project;


