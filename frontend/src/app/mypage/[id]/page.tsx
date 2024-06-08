'use client'

import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import Link from 'next/link';
import { userContext } from "@/context/UserContext";
import Calendar from './components/Calendar';
import MissionRecord from "./components/MissionRecord";

const Mypage = () => {
  const { status } = useSession();
  const router = useRouter();
  const user = useContext(userContext);
  const pathname = usePathname();

  useEffect(() => {
    // status が "loading" の場合や user が null の場合はリダイレクトしない
    if (status !== "loading" && user !== null) {
      if (status === "unauthenticated" || pathname !== `/mypage/${user?.id}`) {
        router.push('/');
      }
    }
  }, [status, pathname, user]);

    if (status === "loading") {
    return <p>Loading...</p>;
  }

    // リダイレクト条件を満たしている場合、nullを返して何もレンダリングしない
  if (status === "unauthenticated" || pathname !== `/mypage/${user?.id}`) {
    return null;
  }

  if (status === "authenticated" && pathname === `/mypage/${user?.id}`) {
    return (
      <div className="grid md:grid-cols-2 min-h-100">
        <div className="bg-green-100 place-content-center">
          <h1 className="text-center mt-5">ミッション実施日</h1>
          <div className="m-5">
            <Calendar />
          </div>
          <div className="flex justify-around text-xl mb-5">
            <Link href="/mission/createMission">
              ウォーキング開始
            </Link>
            <Link href="/mission/playingMission">
              挑戦中のミッション
            </Link>
          </div>
        </div>
        <MissionRecord user_id={user?.id ?? null} />
      </div>
    );
  }
  return null; // 状態が他の場合に対応するためnullを返す
};

export default Mypage;