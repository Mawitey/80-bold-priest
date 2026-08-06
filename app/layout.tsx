import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
