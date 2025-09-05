/** @type {import('./index').Project} */
const project = {
  slug: "QuadraticDiscriminantAnalysis",
  title: "Quadratic Discriminant Analysis (QDA) vs. Optimal Bayes Classifier (BC)",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/QuadraticDiscriminantAnalysis/QDA.png",
  hero: "/images/QuadraticDiscriminantAnalysis/QDA.png",
  pdfFile: "",
  tags: ["Machine Learning", "Statistics","R","ETL"],
  meta: {
    role: "Academic",
    stack: "Machine Learning · Data Mining · Statistical Learning · Optimal Bayes Classifer · Bayes Classifer ",
    duration: "09/2019 - 01/2020",
    tools: "R", 
    links: []
  },

  desc: [
    "Background",
    "Quadratic Discriminant Analysis (QDA) is a statistical classification method that models each class with its own covariance matrix, allowing for flexible decision boundaries. The Optimal Bayes Classifier (Optimal BC) represents the theoretical ideal, making predictions based on the true underlying probability distributions.",
    
    "Objective",
    "The goal of this project was to compare the performance of QDA and Optimal BC across different sample sizes, and to examine how sample size affects their relative classification accuracy.",

    "Methodology",
    " · Data Setup: Two separate experiments were run with sample sizes of n = 100 and n = 1000.",
    " · Evaluation: Classification performance was analyzed across all label pairs, with special attention to the separation between label 1 and label 3, where classification difficulty is higher.",
    " · Approach: Both QDA and Optimal BC models were trained and tested under identical conditions, ensuring a fair comparison.",

    "Results",
    " · With n = 100, both classifiers performed well overall, but Optimal BC showed a slight advantage in correctly classifying between label 1 and label 3.",
    " · With n = 1000, the performance difference remained similar — the increase in sample size did not notably alter the gap, and the Optimal BC consistently outperformed QDA in this classification challenge.",
   

    "Key Takeaways",
    " · Optimal BC can offer measurable improvements in classification for certain label pairs, even when QDA performs strongly overall.",
    " · Increasing sample size improves absolute accuracy for both models, but does not necessarily close the performance gap between them.",
    " · For problems where decision boundary flexibility is crucial, the Optimal BC may yield a more reliable separation.",
    ],

  gallery: [
    "/images/QuadraticDiscriminantAnalysis/1.png",    
    "/images/QuadraticDiscriminantAnalysis/2.png",    
    "/images/QuadraticDiscriminantAnalysis/3.png",    
    "/images/QuadraticDiscriminantAnalysis/4.png",    
    "/images/QuadraticDiscriminantAnalysis/5.png",    
    "/images/QuadraticDiscriminantAnalysis/6.png",
  ]
};

export default project;
