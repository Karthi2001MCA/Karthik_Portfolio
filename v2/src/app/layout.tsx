import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://karthi2001mca.github.io/Karthik_Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Karthik Babu | AI & Data Scientist",
    template: "%s | Karthik Babu",
  },
  description:
    "Karthik Babu — AI/ML Engineer & Data Scientist. Machine learning, computer vision, and data-driven products. Explore projects and a live in-browser ML demo.",
  keywords: [
    "Karthik Babu",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Computer Vision",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Karthik Babu" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Karthik Babu | AI & Data Scientist",
    description:
      "AI/ML Engineer & Data Scientist. Live ML demo, AI resume assistant, and interactive project case studies.",
    siteName: "Karthik Babu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Babu | AI & Data Scientist",
    description:
      "AI/ML Engineer & Data Scientist. Live in-browser ML demo and interactive project case studies.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
