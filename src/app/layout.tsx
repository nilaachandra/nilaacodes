import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";
import dynamic from "next/dynamic";
import { PHProvider } from "./Providers";
import ProgressProvider from "./ProgressProvider";
import { Toaster } from "sonner";
import QueryProvider from "./QueryProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "800"] });

const bricolageRegular = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
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
    images: [{ url: "/nilaacodesog.png", width: 1200, height: 630 }],
    locale: "en-IN",
    type: "website",
  },
};
const PostHogPageView = dynamic(() => import("@/app/PostHogPageView"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={GeistSans.className} suppressHydrationWarning>
        <PHProvider>
          <body className="max-w-[712px] mx-auto scroll-smooth w-full px-4 min-h-screen">
            <QueryProvider>
              <PostHogPageView />
              <ProgressProvider>
                <Providers>
                  <Navbar />
                  <main>{children}</main>

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
