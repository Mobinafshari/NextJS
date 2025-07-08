import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

const manrope = Manrope({
  variable: "--font-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata : Metadata = {
  title : "NextJs Test" ,
  description : "Testing NextJs Stuff" ,
  
}

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
