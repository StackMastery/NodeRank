import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const reThink = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Node Rank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="">
      <body className={`${reThink.className} antialiased`}>{children}</body>
    </html>
  );
}
