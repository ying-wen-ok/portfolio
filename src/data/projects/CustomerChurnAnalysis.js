/** @type {import('./index').Project} */
const project = {
  slug: "CustomerChurnAnalysis",
  title: "Telco’s Customer Churn Data Analysis",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/CustomerChurnAnalysis/CustomerChurnAnalysis.png",
  hero: "/images/CustomerChurnAnalysis/CustomerChurnAnalysis.png",
  pdfFile: "",
  tags: ["Machine Learning", "Statistics","ETL"],
  meta: {
    role: "Academic",
    stack: "Data Mining · Feature Selection · Feature Engineering · MODEL COMPARISON · Parameter Optimization",
    duration: "09/2019 - 01/2020",
    tools: "RapidMiner", 
    links: []
  },

  desc: [
    "Background",
"This project focuses on predicting and understanding customer churn for a telecommunications company (Telco Ltd.) using data from January 2018. The dataset contains 7,043 customers, 20 regular attributes, and a target variable 'Churn'. The aim is both to predict churn and to identify characteristics of churned customers.",

"Objective",
" · Task 1: Build models to predict customer churn and evaluate their performance.",
" · Task 2: Determine the key characteristics and segments of customers who are most likely to churn.",

"Methodology",
" · Data Preprocessing: Data cleaning (handling missing values, converting nominal to binomial attributes), exploratory data analysis, and feature selection.",
" · Feature Selection: Forward selection, attribute weighting (information gain ratio, Gini index, Relief, Chi-square). Contract type and Internet Service emerged as the most important features.",
" · Models Compared: Logistic Regression, Random Forest, Naive Bayes, Deep Learning, KNN.",
" · Parameter Optimization & Ensemble: Grid search, bagging, AdaBoost, voting with top models.",
" · Clustering: K-means clustering (K=3 and K=4) to segment churned customers.",
" · Tools: Python (ML models), statistical methods, clustering analysis.",

"Results",
" · Feature Selection led to 12 key attributes; feature engineering was abandoned as it reduced performance.",
" · Random Forest achieved the best F-measure (78.65%) with recall 62.68%; Logistic Regression achieved recall 79.83%.",
" · Voting ensemble of top 3 models gave the highest performance, outperforming single models and other ensemble methods.",
" · Clustering (K=3) identified groups such as: (1) DSL users with mailed check, low total charges; (2) Month-to-month contract with electronic check, high monthly charge, low tenure; (3) High total charge, two-year contract.",
" · Clustering (K=4) provided finer segmentation, highlighting that monthly contract, low tenure, and electronic check payment are high churn risk indicators.",

"Key Takeaways",
" · Short-term contracts, low tenure, and electronic check payments are strong churn predictors.",
" · High monthly charges may indicate unmet needs and risk of churn.",
" · Ensemble methods, particularly voting of top models, can boost prediction performance.",
" · Customer segmentation via clustering can guide targeted retention strategies."

    ],

  gallery: [
    "/images/CustomerChurnAnalysis/1.png",
    "/images/CustomerChurnAnalysis/2.png",
    "/images/CustomerChurnAnalysis/9.png",
    "/images/CustomerChurnAnalysis/3.png",    
    "/images/CustomerChurnAnalysis/4.png",
    "/images/CustomerChurnAnalysis/5.png",
    "/images/CustomerChurnAnalysis/6.png",
    "/images/CustomerChurnAnalysis/7.png",
    "/images/CustomerChurnAnalysis/8.png",
  ]
};

export default project;
