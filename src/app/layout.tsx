import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshya Mahawar",
  description: "Lakshya Mahawar's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('layout.tsx rendered!');
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/bg1.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}