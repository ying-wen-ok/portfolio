/** @type {import('./index').Project} */
const project = {
  slug: "SARS",
  title: "Security Audit & Reporting System",
  kicker: "Antra.Inc, Sterling, VA",
  cover: "/images/SARS/cover.png",
  hero:  "/images/SARS/cover.png",
  tags: ["C#", ".NET", "Angular JS", "Angular", "SQL", "Full Stack", "ETL", "SSIS", "JavaScript","SSRS", "Full Stack","Backend Engineer","UI Design","System Design","Frontend Engineer"],

  meta: {
    role: "ETL Developer & Full-Stack Software Engineer",
    stack: "C#/.NET · JavaScript/Angular JS · SQL Server  · SSIS · SSRS",
    duration: "03/2016 - 10/2016",
    tools: "Visual Studio · SQL Server Management Studio · Git · IIS", 
    links: [
      // { text: "Demo", href: "https://..." }
    ]
  },

  desc: [
    "The Security Audit & Reporting System (SARS) is a comprehensive web-based application designed to facilitate audit recording and reporting. It assists auditors in reviewing controls and enhancements according to NIST Special Publication 800-53 (Rev. 4), providing supporting documentation and detailed assessments.",
    "Engineered the web-based application using AngularJS for the frontend, RESTful APIs for backend integration, and SQL Server for data storeage, delivering a robust and scalable solution.",     
    "The high light of the project is to use the intergrted data visulization tool in a flexcible way to present chats using SQL Server Reporting Services (SSRS) to the AngularJS frontend. And the at the backend implement ETL processes using SQL Server Integration Services (SSIS) for data cleansing, transfer, and loading." ,
      
  ],

  gallery: [
    // "/images/shelter-1.jpg",
    // "/images/shelter-2.jpg"
  ]
};

export default project;
