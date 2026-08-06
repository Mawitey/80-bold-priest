import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "80 Bold Priest | Online Learning",
  description: "80 Bold Priest online video teaching and protected course access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
