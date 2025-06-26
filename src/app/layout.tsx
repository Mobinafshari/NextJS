"use client";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

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
        <QueryClientProvider client={queryClient}>
          <section className="h-[calc(100%-60px)]">{children}</section>
        </QueryClientProvider>
      </body>
    </html>
  );
}
