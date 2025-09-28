import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FRMI - Mortgage Solutions & Real Estate Services | California",
  description: "Empower your real estate journey with FRMI. We provide innovative mortgage solutions, real estate brokerage services, and legal case funding. Get pre-approved for your home loan today with our integrated mortgage and real estate expertise.",
  keywords: "mortgage loans, real estate, California, home loans, refinancing, FHA loans, VA loans, commercial loans, property valuation, real estate brokerage, legal case funding",
  authors: [{ name: "FRMI" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ]
  },
  openGraph: {
    title: "FRMI - Mortgage Solutions & Real Estate Services",
    description: "Empower your real estate journey with FRMI. Integrated mortgage and real estate services under one roof.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRMI - Mortgage Solutions & Real Estate Services",
    description: "Empower your real estate journey with FRMI. Integrated mortgage and real estate services under one roof.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "FRMI", "version": "1.0.0", "greeting": "Welcome to FRMI - Your trusted mortgage and real estate partner"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
