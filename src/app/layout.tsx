import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amarnadh P B — AI + Full-Stack Product Engineer",
    template: "%s | Amarnadh P B",
  },
  description:
    "Building intelligent systems, SaaS products, and agentic workflows — end to end. Portfolio showcasing AI agents, full-stack products, and technical architecture.",
  keywords: [
    "AI engineer",
    "full-stack developer",
    "SaaS",
    "agentic workflows",
    "portfolio",
    "product engineer",
  ],
  authors: [{ name: "Amarnadh P B" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Amarnadh P B — AI + Full-Stack Product Engineer",
    description:
      "Building intelligent systems, SaaS products, and agentic workflows — end to end.",
    siteName: "Amarnadh P B",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarnadh P B — AI + Full-Stack Product Engineer",
    description:
      "Building intelligent systems, SaaS products, and agentic workflows — end to end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
