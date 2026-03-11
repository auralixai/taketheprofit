import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Take The Profit | AI Trade Exit Agent",
  description: "The ultimate AI platform for trade exits. Stop overtrading and eliminate emotional exits with our AI-powered backtesting and psychological signals.",
  openGraph: {
    title: "Take The Profit | AI Trade Exit Agent",
    description: "AI-powered exit strategies for professional traders.",
    url: "https://taketheprofit.com",
    siteName: "Take The Profit",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0B0D] text-white`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
