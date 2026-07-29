import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ThemeProvider from "@/components/ThemeProvider";

// Clean, corporate, highly legible — industry standard
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Monospace for terminal/code panels only
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaze PMS | Premium Integrated Property & Facility Management",
  description: "Founded by an Indian Navy veteran, Amaze PMS delivers end-to-end soft services, MEP engineering, security guarding, and smart utilities management with military precision and discipline.",
  keywords: "Property Management, Facility Management, Housekeeping Services, MEP Services, Security Guarding Cyberabad, Action Group subsidiary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

