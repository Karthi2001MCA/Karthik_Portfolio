export type Certificate = {
  title: string;
  issuer: string;
  year?: string;
  file: string; // PDF under /public/certificates
};

// PDFs live in /public/certificates
export const certificates: Certificate[] = [
  {
    title: "Master of Computer Applications (MCA)",
    issuer: "Sree Narayana Gurukulam College of Engineering",
    file: "/certificates/mca.pdf",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    issuer: "Mahatma Gandhi University",
    file: "/certificates/karthik-bca.pdf",
  },
  {
    title: "Power BI Data Analytics",
    issuer: "Professional Certification",
    file: "/certificates/power-bi-data-analytics.pdf",
  },
];
