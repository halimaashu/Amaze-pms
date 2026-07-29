import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaze PMS | Premium Integrated Property & Hotel Management",
  description: "Founded by an Indian Navy veteran, Amaze PMS delivers end-to-end hotel operations, luxury suite maintenance, MEP engineering, security guarding, and smart utilities management.",
  keywords: "Hotel Management, Property Management, Luxury Suites, Facility Management, Housekeeping Services, MEP Services, Security Guarding",
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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#090e20",
              color: "#f8fafc",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: "12px",
              fontWeight: "600",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#090e20",
              },
            },
          }}
        />
        <CustomCursor />
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
