import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Lakshya Mahawar's Portfolio",
  description:
    "A portfolio website showcasing the skills, projects, and experiences of Lakshya Mahawar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/profile.webp" />
        <link rel="preload" as="image" href="/images/mazeai.webp" />
        <link rel="preload" as="image" href="/images/questaweb.webp" />
        <link rel="preload" as="image" href="/images/visualreact.webp" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}