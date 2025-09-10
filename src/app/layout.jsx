"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <head>
        <title>BuildFlow</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
