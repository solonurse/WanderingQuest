import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from '@/providers/NextAuth';
import ToastProvider from '@/context/ToastProvider';
import { UserContextProvider } from "@/context/UserContext";
import Loading from "@/context/LoadingContext";

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
            </body>
          </html>
      </UserContextProvider>
    </NextAuthProvider>
  );
}
