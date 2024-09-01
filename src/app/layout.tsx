import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Loizel",
  description: "My online portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      <meta charSet="UTF-8"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
