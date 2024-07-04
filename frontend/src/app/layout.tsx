import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from '@/providers/NextAuth';
import ToastProvider from '@/context/ToastProvider';
import { UserContextProvider } from "@/context/UserContext";
import Loading from "@/context/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wandering-quest.vercel.app/"),
  title: "WanderingQuest",
  description: "ゲーム感覚でウォーキングを楽しめるミッションを提供するウォーキングアプリです。",
	openGraph: {
		title: 'WanderingQuest',
		description: 'ゲーム感覚でウォーキングを楽しめるミッションを提供するウォーキングアプリです。',
	},
	twitter: {
		title: 'WanderingQuest',
		description: 'ゲーム感覚でウォーキングを楽しめるミッションを提供するウォーキングアプリです。',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
  children,
}: {
	children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <UserContextProvider>
          <html lang="ja">
            <body className="flex flex-col">
              <Loading>
                <ToastProvider>
                  <Headers />
                  {children}
                  <Footer />
                </ToastProvider>
              </Loading>
              <Analytics />
            </body>
          </html>
      </UserContextProvider>
    </NextAuthProvider>
  );
}
