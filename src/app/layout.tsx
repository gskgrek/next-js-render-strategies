import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Nav } from "@/components/nav/Nav";

import Providers from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Render Strategies",
  description: "Proof of Concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <aside>
            <Nav />
          </aside>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
