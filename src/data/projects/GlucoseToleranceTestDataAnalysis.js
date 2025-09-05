/** @type {import('./index').Project} */
const project = {
  slug: "GlucoseToleranceTestDataAnalysis",
  title: "Glucose Tolerance Test Data Analysis",
  kicker: "CUNY Baruch, Information Systems and Statistics",
  cover: "/images/GlucoseToleranceTestDataAnalysis/STA9705.png",
  hero: "/images/GlucoseToleranceTestDataAnalysis/STA9705.png",
  // pdfFile: "/STA9705.pdf",
  tags: ["Statistics","ETL"],
  meta: {
    role: "Academic",
    stack: "Multivariate Hypothesis Testing · Discriminant and Classification Analysis  · Principal Component Analysis · Factor Analysis",
    duration:  "09/2019 - 01/2020",
    tools: "SAS", 
    links: []
  },

  desc: [
    "Background",
"This project investigates the physiological response of obese individuals compared to a control group during a glucose tolerance test, measured via plasma inorganic phosphate concentration at 8 different time points. The study applied multiple multivariate statistical methods to uncover group differences and identify key measurements contributing to separation.",

"Objective",
"The goal was to determine whether there is a statistically significant difference between obese and control groups, identify the time points most relevant for classification, and reduce dimensionality for further analysis.",

"Methodology",
" · Data: 13 control subjects and 20 obese subjects, each measured at 8 time points (0 to 5 hours after glucose intake).",
" · Statistical Methods: Multivariate hypothesis testing (Hotelling’s T²), discriminant and classification analysis (linear and quadratic classification, k-NN), principal component analysis (PCA), and factor analysis.",
" · Software: SAS was used for all calculations, visualizations, and statistical tests.",

"Results",
" · Multivariate hypothesis testing showed a significant difference between control and obese groups (T² = 61.999963, p < 0.05).",
" · Discriminant analysis revealed that measurements at 0h (Y1), 0.5h (Y2), and 1.5h (Y4) contributed most to group separation.",
" · Quadratic classification achieved 0% resubstitution error; cross-validation error rates varied by method, with k-NN (k=5) achieving 10.19% total error.",
" · PCA indicated that the first 2 principal components explained ~82% of variance.",
" · Factor analysis grouped the 8 variables into 2–3 underlying factors, with the first four time points loading strongly on the first factor.",

"Key Takeaways",
" · Obese individuals exhibit distinct glucose tolerance test response profiles compared to controls, with key differences at specific early time points.",
" · Combining discriminant analysis with PCA and factor analysis provides a robust approach to both classification and dimensionality reduction.",
" · Early time-point measurements (0h, 0.5h, 1.5h) are the most informative for differentiating between the two groups."

    ],

  gallery: [
    "/images/GlucoseToleranceTestDataAnalysis/1.png",
    "/images/GlucoseToleranceTestDataAnalysis/2.png",
    "/images/GlucoseToleranceTestDataAnalysis/3.png",
    "/images/GlucoseToleranceTestDataAnalysis/4.png",
    "/images/GlucoseToleranceTestDataAnalysis/5.png",
    "/images/GlucoseToleranceTestDataAnalysis/6.png",
    "/images/GlucoseToleranceTestDataAnalysis/7.png",
    "/images/GlucoseToleranceTestDataAnalysis/8.png",
    "/images/GlucoseToleranceTestDataAnalysis/9.png",
    "/images/GlucoseToleranceTestDataAnalysis/10.png",
    "/images/GlucoseToleranceTestDataAnalysis/11.png",
    "/images/GlucoseToleranceTestDataAnalysis/12.png",    
    "/images/GlucoseToleranceTestDataAnalysis/13.png",
  ]
};

export default project;
