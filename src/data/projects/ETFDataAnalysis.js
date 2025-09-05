/** @type {import('./index').Project} */
const project = {
  slug: "ETFDataAnalysis",
  title: "Exchange-Traded Funds Data Analysis",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/ETFDataAnalysis/cover.png",
  hero: "/images/ETFDataAnalysis/cover.png",
  pdfFile: "",
  tags: ["Machine Learning", "Statistics","Python","Finance","ETL"],
  meta: {
    role: "Academic",
    stack: "Machine Learning · Data Mining · Statistical Learning  · random forrest  · radial svm  · logistic · logistic lasso · logistic ridge",
    duration:  "09/2019 - 01/2020",
    tools: "Python", 
    links: []
  },

  desc: ["Background",
"This project analyzes Exchange-Traded Funds (ETFs) to identify factors that make an ETF profitable. ETFs are generally considered an easy, low-cost, and relatively low-risk investment vehicle. The dataset, sourced from Kaggle, contains a wide range of ETF attributes, and the goal was to build predictive models to determine whether an ETF will be profitable in the next year.",

"Objective",
" · Create a binary target variable 'Is profitable' based on the one-year fund return ('fund_return_1year').",
" · Apply and compare multiple machine learning models to predict ETF profitability.",
" · Identify the most important features driving ETF performance.",
" · Evaluate trade-offs between prediction accuracy and computational efficiency.",

"Methodology",
" · Data Preparation: Removed columns with more than 10% missing values, dropped rows with missing data, and eliminated identical columns (e.g., fund_name, fund_extended_name).",
" · Final Dataset: 1,811 instances, 30 features, balanced target variable.",
" · Models Compared: Ridge Regression, Lasso Regression, Support Vector Machine (SVM), Least Squares (LS), Random Forest (RF).",
" · Hyperparameter Tuning: Compared performance with n-learn values of 0.5 and 0.9.",
" · Evaluation Metrics: Error rate, computation time, feature importance.",
" · Tools: Python for data cleaning, model training, and evaluation.",

"Results",
" · Best Efficiency: LS model achieved the lowest error rate (0.09–0.10) with high efficiency.",
" · Best Predictive Performance: RF model achieved the lowest overall error rate (0.08) but required the longest training time (6.29–10.88 seconds).",
" · SVM performance improved slightly with higher n-learn but at a significant time cost.",
" · Feature Selection identified top features: fund_yield, portfolio_stocks, price_earnings, category_return_1month, net_annual_expense_ratio_fund, net_annual_expense_ratio_category, price_cashflow, rating_aaa.",

"Key Takeaways",
" · LS is the best choice for balancing prediction performance and computational efficiency.",
" · RF delivers the strongest predictive accuracy but at a significant computational cost.",
" · Certain financial ratios and expense metrics are strong indicators of ETF profitability.",
" · Model selection should consider both accuracy and time cost depending on the application context."

    ],

  gallery: [
   "/images/ETFDataAnalysis/1.png",
    "/images/ETFDataAnalysis/2.png",
    "/images/ETFDataAnalysis/3.png",  
    "/images/ETFDataAnalysis/4.png",
    "/images/ETFDataAnalysis/5.png",
    "/images/ETFDataAnalysis/6.png",
  ]
};

export default project;
