import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from '@/providers/NextAuth';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WanderingQuest",
  description: "WanderingQuestはウォーキングアプリです。",
};

export default function RootLayout({
  children,
}: {
	children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <html lang="ja">
        <body className="flex flex-col min-h-screen">
          <Headers />
          {children}
          <Footer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
