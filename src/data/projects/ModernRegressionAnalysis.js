/** @type {import('./index').Project} */
const project = {
  slug: "ModernRegressionAnalysis",
  title: "Real Estate Price Prediction Using Linear Regression Models",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/ModernRegressionAnalysis/STA9700.png",
  hero: "/images/ModernRegressionAnalysis/STA9700.png",
  pdfFile: "/STA9700.pdf",
  tags: ["Statistics", "ETL"],
  meta: {
    role: "Academic",
    stack: "Regression Analysis",
    duration: "01/2019 - 05/2019",
    tools: "MATLAB", 
    links: []
  },

  desc: [
"Background",
"These projects focus on identifying key factors influencing home prices in Upstate New York, beyond the well-known mantra of 'location, location, location.' The dataset, sourced from publicly available records, includes features such as selling price, living area, number of bedrooms, number of fireplaces, lot size, and central air availability. The analysis applied both simple and multiple linear regression models using SPSS.",

"Objective",
"The goal was to examine how individual and combined property features predict selling price, evaluate the statistical significance of each predictor, explore potential interactions, and build the most effective regression model for price prediction.",

"Methodology",
" · Data Setup: Random sample of home sales data with multiple numeric and categorical predictors.",
" · Project 1 (Simple Regression): Modeled selling price as a function of living area; evaluated model fit with R², residual diagnostics, and transformations to address normality issues.",
" · Project 2 (Multiple Regression): Developed models including living area, number of bedrooms, number of fireplaces, and central air with interaction terms; assessed collinearity, partial correlations, and extra sum of squares; applied backward elimination for model selection.",
" · Statistical Software: SPSS was used for all analysis, plotting, and diagnostics.",

"Results",
" · Living area was consistently the strongest and most statistically significant predictor of selling price.",
" · In the simple regression model, a 1 sq. ft. increase in living area was associated with an estimated $116.65 increase in price (R² = 57.7%).",
" · In multiple regression, the number of bedrooms had a negative coefficient when holding living area constant, suggesting smaller average room size reduces value.",
" · The interaction between living area and central air was significant; houses with central air gained an additional $35.61 per sq. ft. compared to those without.",
" · Number of fireplaces was not a statistically significant predictor.",

"Key Takeaways",
" · Living area is the dominant driver of selling price, but other features can modify its impact.",
" · Interaction terms can uncover nuanced relationships not visible in additive models.",
" · Collinearity should be monitored when combining size-related variables such as bedrooms and living area.",
" · Applying model diagnostics and selection techniques (e.g., backward elimination) ensures more robust and interpretable models."


  ],

  gallery: [
    // "/images/brain-1.jpg",
    // "/images/brain-2.jpg"
  ]
};

export default project;
