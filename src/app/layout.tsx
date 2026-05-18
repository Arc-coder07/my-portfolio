import type { Metadata } from "next";
import { Space_Mono, Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/shared/SmoothScrolling";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
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
      className={`${manrope.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScrolling>
          <NoiseOverlay />
          <CustomCursor />
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
