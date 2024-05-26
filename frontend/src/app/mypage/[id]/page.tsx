'use client'

import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import { userContext } from "@/context/UserContext";
import Calendar from './components/Calendar';

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
          <h1 className="text-center">ミッション実施日</h1>
          <div className="m-5">
            <Calendar />
          </div>
          <div>ウォーキング開始</div>
          <div>挑戦中のミッション</div>
        </div>
        <div className="bg-blue-100 grid place-content-center">
          <div>ミッション一覧</div>
          <div>ミッション内容</div>
          <div>ミッション内容</div>
          <div>ミッション内容</div>
          <div>ミッション内容</div>
          <div>ミッション内容</div>
          <div>ミッション内容</div>
        </div>
      </div>

    )
  }

  return null; // 状態が他の場合に対応するためnullを返す
};

export default Mypage;