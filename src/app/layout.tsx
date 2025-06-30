import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import BodyWrapper from "./components/BodyWrapper";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "SCRIZA - Innovative Software Development Solutions", template: "%s | SCRIZA" },
  description: "Leading software development company delivering innovative solutions for businesses worldwide.",
  keywords: [ "software development", "web development", "mobile apps", "cloud solutions", "DevOps", "technology consulting" ],
  authors: [{ name: "SCRIZA Team" }],
  creator: "SCRIZA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scriza.in",
    siteName: "SCRIZA",
    title: "SCRIZA - Innovative Software Development Solutions",
    description: "Leading software development company delivering innovative solutions for businesses worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCRIZA - Innovative Software Development Solutions",
    description: "Leading software development company delivering innovative solutions for businesses worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <BodyWrapper>{children}</BodyWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
