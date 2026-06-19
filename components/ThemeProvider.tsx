"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      enableColorScheme={false} // Mencegah pemuatan skrip sinkronisasi paksa yang memicu error di Next 16
    >
      {children}
    </NextThemesProvider>
  );
}
