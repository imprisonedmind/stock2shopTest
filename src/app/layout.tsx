import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock 2 Shop Assessment",
  description: "Take home coding task for stock 2 shop interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className={"flex flex-col gap-4"}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
