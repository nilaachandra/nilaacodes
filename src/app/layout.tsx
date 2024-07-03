import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";
const bricolageRegular = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "800"],
});


export const metadata: Metadata = {
  title: "Nilaacodes",
  description: "Nilaa's Portfolio",
  icons: {
    icon: ['nilaacodes-light.png'],
    shortcut: ['nilaacodes-light.png'],
  },
  openGraph: {
    title: 'Nilaacodes',
    description: 'Nilaacodes - Portfolio',
    url: 'https://nilaacodes.vercel.app',
    siteName: 'Nilaacodes',
    images: [
      { url: '/nilaacodes-dark.png', width: 630, height: 630 },
      {
        url: '/nilaacodes-dark.png',
        width: 630,
        height: 630,
        alt: 'Nilaacodes',
      },
    ],
    locale: 'en-IN',
    type: 'website',
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageRegular.className}`}
      suppressHydrationWarning
    >
      <body className="w-full lg:px-[64vh] px-4 py-4 min-h-screen">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
