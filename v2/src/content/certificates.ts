export type Certificate = {
  id: number;
  name: string;
  image: string;
  category: string;
};

// Images live in /public/images/certificates
export const certificates: Certificate[] = [
  { id: 1, name: "Artificial Intelligence Diploma", image: "Ai-Diploma.png", category: "ai" },
  { id: 2, name: "Microsoft AI & ML Engineering", image: "Microsoft AI & ML Engineering.png", category: "ai" },
  { id: 3, name: "IBM Generative AI Engineering", image: "IBM Generative AI Engineering.png", category: "ai" },
  { id: 4, name: "Data Science & ML Certificate", image: "DS ML CERTIFICATE.png", category: "data_science" },
  { id: 5, name: "NASSCOM Data Science", image: "NASSCOM DATA SCIENCE CERTIFICATE.png", category: "data_science" },
  { id: 6, name: "Machine Learning for Supply Chain", image: "Machine Learning for Supply Chain.png", category: "ai" },
  { id: 7, name: "NASSCOM Python", image: "NASSCOM PYTHON CERTIFICATE.png", category: "programming" },
  { id: 8, name: "Python Certificate", image: "python.png", category: "programming" },
  { id: 9, name: "PDS Certificate", image: "PDS certificate.png", category: "data_science" },
  { id: 10, name: "AI Certificate", image: "Ai certificate.png", category: "ai" },
  { id: 11, name: "Power BI Certificate", image: "PwerBi.png", category: "data_viz" },
  { id: 12, name: "Tableau Certificate", image: "tableau.png", category: "data_viz" },
  { id: 13, name: "SQL Certificate", image: "SQL.png", category: "database" },
  { id: 14, name: "Udemy Certificate", image: "UDEMY.png", category: "course" },
  { id: 15, name: "TCS Youth Employment", image: "TCS YOP rasheeque.png", category: "course" },
  { id: 16, name: "TCS Accounting Fundamentals", image: "TCS accountuing fundamentals.png", category: "course" },
  { id: 17, name: "Work Readiness Certificate", image: "certificate_workreadiness.png", category: "course" },
];
