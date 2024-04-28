"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <title>BuildFlow</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}{" "}
        </QueryClientProvider>
      </body>
    </html>
  );
}
