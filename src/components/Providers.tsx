"use client";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "@/components/ThemeProvider";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <LenisProvider>{children}</LenisProvider>
        <CustomCursor />
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
      </SessionProvider>
    </ThemeProvider>
  );
}
