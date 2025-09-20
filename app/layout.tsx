import type { Metadata } from "next";

import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traferr — talk to locals without the noise",
  description:
    "Traferr connects you directly with locals so you can ask real questions and get honest answers in minutes.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
