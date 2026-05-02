import type { Metadata } from "next";
import { Playfair_Display, PT_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarence Gio Bolonia — UI/UX & Product Designer",
  description:
    "Portfolio of Clarence Gio Bolonia — UI/UX and Product Designer specializing in complex Fintech and B2B SaaS platforms. 5 years, 30+ projects.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Figma",
    "Fintech",
    "B2B SaaS",
    "Philippines",
    "Design Systems",
  ],
  authors: [{ name: "Clarence Gio Bolonia" }],
  openGraph: {
    title: "Clarence Gio Bolonia — UI/UX & Product Designer",
    description:
      "Designing clarity from complexity. 5 years building Fintech and B2B SaaS products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarence Gio Bolonia — UI/UX & Product Designer",
    description:
      "Designing clarity from complexity. 5 years building Fintech and B2B SaaS products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ptSans.variable} ${ptSans.variable} ${dmMono.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen bg-surface-50 dark:bg-surface-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
