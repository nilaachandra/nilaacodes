import type { Metadata } from "next";
import { Instrument_Serif, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import dynamic from "next/dynamic";
import { PHProvider } from "./Providers";
import ProgressProvider from "./ProgressProvider";
import { Toaster } from "sonner";
import QueryProvider from "./QueryProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-instrumentSerif",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nilaacodes",
  description: "my corner of the internet",
  icons: {
    icon: ["nilaacodes-dark.png"],
    shortcut: ["nilaacodes-dark.png"],
  },
  openGraph: {
    title: "Nilaacodes",
    description: "my corner of the internet",
    url: "https://www.nilaacodes.me",
    siteName: "Nilaacodes",
    images: [{ url: "/nilaacodes-opengraph.png", width: 1200, height: 630 }],
    locale: "en-IN",
    type: "website",
  },
};
const PostHogPageView = dynamic(() => import("@/app/PostHogPageView"), {});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${instrumentSerif.variable} ${manrope.variable}`}
        suppressHydrationWarning
      >
        <PHProvider>
          <body className="max-w-[712px] mx-auto scroll-smooth w-full px-4 pb-8 min-h-screen">
            <QueryProvider>
              <PostHogPageView />
              <ProgressProvider>
                <Providers>
                  <Navbar />
                  <main className="font-manrope">{children}</main>
                  <Footer />
                </Providers>
              </ProgressProvider>
              <Toaster position="top-center" />
            </QueryProvider>
          </body>
        </PHProvider>
      </html>
    </ViewTransitions>
  );
}
