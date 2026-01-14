import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Klinik Pratama Mufiza Bandung | Beauty Care dan Sunat Modern Al-Fatih",
  description: "Klinik Pratama Mufiza di Cinambo Bandung dengan layanan beauty care menggunakan skin analyzer, sunat modern Al-Fatih ramah anak, klinik umum, dan bidan. Rating 5.0 dari 75 ulasan.",
  keywords: ["klinik pratama cinambo bandung", "skincare klinik bandung", "facial bandung cinambo", "sunat modern bandung", "khitan anak bandung", "klinik umum bandung", "bidan bandung"],
  authors: [{ name: "Klinik Pratama Mufiza" }],
  openGraph: {
    title: "Klinik Pratama Mufiza Bandung",
    description: "Layanan Kesehatan & Kecantikan Terpadu di Bandung",
    url: "https://klinikmufiza.com",
    siteName: "Klinik Pratama Mufiza",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="5f9c8f64-f28b-4f5e-9d05-deda72ee8634"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Klinik Mufiza", "version": "1.0.0"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
