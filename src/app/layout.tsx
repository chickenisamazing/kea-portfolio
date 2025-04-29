import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../component/Navbar/Navbar";

const pretendard = localFont({
  src: [
    // {
    //   path: ".././font/Pretendard/Pretendard-Thin.subset.woff2",
    //   weight: "100",
    //   style: "normal",
    // },
    // {
    //   path: ".././font/Pretendard/Pretendard-ExtraLight.subset.woff2",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: ".././font/Pretendard/Pretendard-Light.subset.woff2",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: ".././font/Pretendard/Pretendard-Regular.subset.woff2",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: ".././font/Pretendard/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: ".././font/Pretendard/Pretendard-SemiBold.subset.woff2",
    //   weight: "600",
    //   style: "normal",
    // },
    {
      path: ".././font/Pretendard/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: ".././font/Pretendard/Pretendard-ExtraBold.subset.woff2",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: ".././font/Pretendard/Pretendard-Black.subset.woff2",
    //   weight: "900",
    //   style: "normal",
    // },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 케아의 포트폴리오",
  description: "프론트엔드 개발자 케아를 소개합니다.",
  // icons: {
  //   icon: "./assets/line_penrose.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${pretendard.className}`}>
        {/* <body> */}
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
