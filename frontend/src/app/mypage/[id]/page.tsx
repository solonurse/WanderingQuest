'use client'

import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import { userContext } from "@/context/UserContext";

const Mypage = () => {
  const { status } = useSession();
  const router = useRouter();
  const user = useContext(userContext);
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated" || (status === "authenticated" && pathname !== `/mypage/${user?.id}`)) {
      router.push('/');
    }
  }, [status, pathname]);

    if (status === "loading") {
    return <p>Loading...</p>;
  }

    // リダイレクト条件を満たしている場合、nullを返して何もレンダリングしない
  if (status === "unauthenticated" || (status === "authenticated" && pathname !== `/mypage/${user?.id}`)) {
    return null;
  }

  if (status === "authenticated" && pathname !== `/mypage/${user?.id}`) {
    return (
      <div>マイページ</div>
    )
  }

  return null; // 状態が他の場合に対応するためnullを返す
};

export default Mypage;