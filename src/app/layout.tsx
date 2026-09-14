import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
  console.log('layout.tsx rendered!');
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const isDark = themeCookie !== "light";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${isDark ? "dark" : ""}`}
    >
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-bg-secondary text-slate-900 dark:text-slate-100">
        <ThemeProvider initialTheme={isDark ? "dark" : "light"}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}