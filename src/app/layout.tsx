import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar/Navbar";

// const pretendard = localFont({
//   src: ""
// })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "케아의 포트폴리오",
  description: "프론트엔드 개발자 케아를 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
