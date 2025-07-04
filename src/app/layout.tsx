import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({
  variable: "--font-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased h-dvh font-semibold`}
      >
        <NextTopLoader />
        <Navbar />
        <section className="h-[calc(100%-60px)]">{children}</section>
      </body>
    </html>
  );
}
