import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { generateGlobalTypographyVariables } from "@/utils/font";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lakshya Mahawar",
  description: "Lakshya Mahawar's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dynamicTypography = generateGlobalTypographyVariables() as React.CSSProperties;

  return (
    <html lang="en" className={`${geist.variable} ${lora.variable}`} style={dynamicTypography}>
      <body>{children}</body>
    </html>
  );
}