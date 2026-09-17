import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";

export const metadata: Metadata = {
  title: "80 ተባዕ ካህን | ትምህርቲ ብኢንተርነት",
  description: "ትምህርቲ ቪድዮ 80 ተባዕ ካህንን ውሑስ መእተዊ ትምህርትን።",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ti">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3L80BKHVY5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3L80BKHVY5');`}
        </Script>
      </body>
    </html>
  );
}
