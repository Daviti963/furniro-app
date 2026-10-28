import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import "./globals.css";

// მთავარი შრიფტი - Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-main",
  display: "swap",
});

// მეორადი შრიფტი - Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro E-commerce",
  description: "Furniro furniture store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}