import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper/wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next App Starter Template",
  description: "A starter template for Next.js applications using tailwindcss, framer motion, and more.",
  keywords: "nextjs, tailwindcss, framer motion, react, javascript",
  authors: [{ name: "Akshay Arora", url: "https://akshay.imperfectors.com" }],
  creator: "Akshay Arora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
