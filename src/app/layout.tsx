import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistSansNonVariable } from "geist/font/sans-non-variable";
import { ViewTransitions } from "next-view-transitions";
const inter = Inter({ subsets: ["latin"], weight: ["500", "800"] });

const bricolageRegular = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Nilaacodes",
  description: "Nilaa's Portfolio",
  icons: {
    icon: ["nilaacodes-dark.png"],
    shortcut: ["nilaacodes-dark.png"],
  },
  openGraph: {
    title: "Nilaacodes",
    description: "Nilaacodes - Portfolio",
    url: "https://nilaacodes.vercel.app",
    siteName: "Nilaacodes",
    images: [
      { url: "/nilaacodes-dark.png", width: 630, height: 630 },
      {
        url: "/nilaacodes-dark.png",
        width: 630,
        height: 630,
        alt: "Nilaacodes",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={GeistSans.className} suppressHydrationWarning>
        <body className="max-w-[712px] mx-auto w-full px-4 min-h-screen">
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
