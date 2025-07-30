"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
