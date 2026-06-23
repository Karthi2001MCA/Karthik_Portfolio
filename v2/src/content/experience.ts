export type Experience = {
  role: string;
  company: string;
  period: string;
  description?: string;
};

export const experience: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "ThinkNeural AI",
    period: "Mar 2026 - Present",
    description:
      "Building computer-vision and ML pipelines for real-time retail and spatial analytics products.",
  },
  {
    role: "Python Data Analytics Intern",
    company: "Luminar Technolab",
    period: "Oct 2025 - Mar 2026",
    description:
      "Data preprocessing, exploratory analysis, and dashboarding with Python, SQL and Power BI.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  detail: string;
  image: string;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sree Narayana Gurukulam College of Engineering",
    detail: "Completed (7.5 CGPA)",
    image: "/images/education/SNGCE_MCA.jfif",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mahatma Gandhi University (MGU)",
    detail: "Completed",
    image: "/images/education/MGU_BCA.jfif",
  },
  {
    degree: "6-Month Internship in Python Data Analytics",
    institution: "Luminar Technolab, Kochi",
    detail: "Completed",
    image: "/images/education/LUMINAR_intern.jpg",
  },
];
