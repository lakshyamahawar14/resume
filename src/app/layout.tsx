import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshya Mahawar | Portfolio",
  description: "Software Engineer Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const isDark = themeCookie !== "light";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${lora.variable} ${isDark ? "dark" : ""}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/profile.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased min-h-screen text-slate-900 dark:text-slate-100 relative">
        <div className="bg-canvas" aria-hidden="true" />
        <ThemeProvider initialTheme={isDark ? "dark" : "light"}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}