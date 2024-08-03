import type { Metadata } from "next";
import "./globals.css";
import { DarkModeStoreProvider } from "@/providers/dark-mode-store-provider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio Made Using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <DarkModeStoreProvider>{children}</DarkModeStoreProvider>
      </body>
    </html>
  );
}
