import type { Metadata } from "next";
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
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
