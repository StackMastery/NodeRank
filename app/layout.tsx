import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header/Header";

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
    <html lang="en" data-arp="" data-gr-ext-installed="">
      <body className={`${reThink.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
