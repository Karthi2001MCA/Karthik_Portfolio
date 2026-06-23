export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  image: string;
  tags: string[];
  featured: boolean;
  links: { view?: string; code?: string };
  caseStudy?: {
    problem: string;
    approach: string[];
    metrics: Metric[];
    stack: string[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "sakshi-ai",
    name: "Sakshi.AI — Video Analytics System",
    tagline: "Real-time CCTV intelligence with zero new hardware",
    desc: "AI-powered CCTV analytics solution for footfall analysis, heatmaps, and security monitoring. Enabled real-time insights without requiring additional hardware.",
    image: "/images/projects/sakshi.png",
    tags: ["Computer Vision", "Video Analytics", "Real-time"],
    featured: true,
    links: {
      view: "https://thinkneural.ai/sakshi.html",
      code: "https://thinkneural.ai/sakshi.html",
    },
    caseStudy: {
      problem:
        "Retailers wanted footfall, dwell-time and security insights from their existing camera infrastructure — without buying new sensors or hardware.",
      approach: [
        "Built computer-vision pipelines that ingest existing CCTV streams and detect, track, and count people in real time.",
        "Generated heatmaps and footfall analytics to reveal high-traffic zones and customer dwell patterns.",
        "Optimised inference to run on multiple concurrent streams with minimal latency.",
      ],
      metrics: [
        { label: "New hardware required", value: "0" },
        { label: "Streams processed", value: "Multi-cam, real-time" },
        { label: "Use cases", value: "Footfall · Heatmaps · Security" },
      ],
      stack: ["Python", "OpenCV", "Deep Learning", "Object Tracking"],
      outcome:
        "Delivered actionable retail intelligence on top of cameras clients already owned, removing the cost barrier to video analytics.",
    },
  },
  {
    slug: "spacezap-ai",
    name: "SpaceZap.AI (ThinkNeural)",
    tagline: "From raw 3D scans to CAD-ready layouts, automatically",
    desc: "Engineered ML pipelines for an AI-driven spatial platform that automates retail site surveys and 3D fit-out designs. Built computer vision models for boundary detection and automated conversion of raw scan data into structured 2D/3D layouts.",
    image: "/images/projects/spacezapp.jpg",
    tags: ["Computer Vision", "3D", "ML Pipelines"],
    featured: true,
    links: {
      view: "https://thinkneural.ai/spacezap.html",
      code: "https://thinkneural.ai/spacezap.html",
    },
    caseStudy: {
      problem:
        "Retail site surveys and fit-out designs were slow and manual, requiring experts to translate raw scans into usable CAD layouts.",
      approach: [
        "Engineered ML pipelines to process raw spatial scan data end-to-end.",
        "Developed computer-vision models for boundary and structure detection.",
        "Automated conversion of raw scans into structured, CAD-ready 2D/3D layouts.",
      ],
      metrics: [
        { label: "Survey workflow", value: "Automated" },
        { label: "Output", value: "CAD-ready 2D/3D" },
        { label: "Input", value: "Raw 3D scans" },
      ],
      stack: ["Python", "Computer Vision", "3D Geometry", "ML Pipelines"],
      outcome:
        "Cut manual effort in spatial surveys by turning raw scans directly into structured layouts designers could use.",
    },
  },
  {
    slug: "breast-cancer-detection",
    name: "Breast Cancer Detection",
    tagline: "Logistic Regression classifier for tumor diagnosis",
    desc: "Built a Logistic Regression classification model using Scikit-learn for tumor detection. Performed rigorous preprocessing, feature scaling, and evaluation to ensure high accuracy.",
    image: "/images/projects/breast_cancer.png",
    tags: ["Classification", "Scikit-Learn", "Healthcare"],
    featured: true,
    links: { code: "https://github.com/Karthi2001MCA" },
    caseStudy: {
      problem:
        "Distinguishing malignant from benign tumors reliably from diagnostic measurements, where false negatives carry serious cost.",
      approach: [
        "Performed rigorous data preprocessing and feature scaling.",
        "Trained a Logistic Regression classifier with Scikit-learn.",
        "Evaluated with accuracy, precision, recall and confusion-matrix analysis.",
      ],
      metrics: [
        { label: "Model", value: "Logistic Regression" },
        { label: "Focus", value: "High recall" },
        { label: "Library", value: "Scikit-Learn" },
      ],
      stack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      outcome:
        "A reliable, interpretable baseline classifier with strong evaluation discipline suited to a sensitive medical use case.",
    },
  },
  {
    slug: "air-quality-index-prediction",
    name: "Air Quality Index Prediction",
    tagline: "Random Forest regression for environmental monitoring",
    desc: "Developed a Random Forest regression model to predict AQI using environmental data. Identified key pollutants using feature importance techniques to aid environmental monitoring.",
    image: "/images/projects/aqi_prediction.png",
    tags: ["Regression", "Random Forest", "Environmental"],
    featured: true,
    links: { code: "https://github.com/Karthi2001MCA" },
    caseStudy: {
      problem:
        "Predicting the Air Quality Index from environmental sensor data and understanding which pollutants drive it.",
      approach: [
        "Cleaned and engineered features from environmental data.",
        "Trained a Random Forest regression model to predict AQI.",
        "Used feature-importance analysis to identify the most influential pollutants.",
      ],
      metrics: [
        { label: "Model", value: "Random Forest" },
        { label: "Task", value: "Regression" },
        { label: "Insight", value: "Key pollutant ranking" },
      ],
      stack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
      outcome:
        "Accurate AQI predictions plus an interpretable ranking of pollutants to support environmental monitoring decisions.",
    },
  },
];
