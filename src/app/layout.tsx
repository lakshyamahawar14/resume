import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "block",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "block",
});

export const metadata: Metadata = {
  title: "Lakshya Mahawar",
  description: "Lakshya Mahawar's portfolio.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('layout.tsx rendered!');
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${lora.variable}`}
    >
      <body className="antialiased min-h-screen text-slate-900 relative">
        {children}
      </body>
    </html>
  );
}