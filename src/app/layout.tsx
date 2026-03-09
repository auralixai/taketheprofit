import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "hmu.ai - AI Workforce for Solopreneurs",
    template: "%s | hmu.ai"
  },
  description: "Scale your business with 24/7 AI agents: Architect, Builder, Money, Operator. Powered by OpenClaw.",
  openGraph: {
    title: "hmu.ai - Your AI Workforce",
    description: "Build your empire with specialized AI employees.",
    url: "https://hmu.ai",
    siteName: "hmu.ai",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hmu.ai - AI Workforce",
    description: "Scale solo with AI agents.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J3J9NEEZBJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J3J9NEEZBJ');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex flex-col min-h-screen pt-20`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <footer className="py-12 w-full text-center px-4 md:px-6 border-t border-white/5 shrink-0 bg-black">
          <div className="container mx-auto">
            <p className="text-sm text-gray-500 font-medium tracking-wide">
              © 2026 hmu.ai. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
