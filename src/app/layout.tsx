import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
const bricolageRegular = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "800"],
});


export const metadata: Metadata = {
  title: "Nilaacodes",
  description: "Nilaa's Portfolio",
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
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
