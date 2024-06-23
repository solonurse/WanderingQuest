"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { userContext } from "@/context/UserContext";
import Modal from "@/components/Modal";
import Login from "@/components/Login";
import useMissionDataInLocalStrage from "@/hooks/useMissionDataInLocalStrage";

export default function Home() {
  const user = useContext(userContext);
  const { missionData } = useMissionDataInLocalStrage();
  const url = missionData ? "/mission/playingMission" : "/mission/createMission"

  return (
    <main className="flex min-h-screen bg-yellow-100 flex-col items-center justify-center p-24">
      <div>
        <Image src="/header.png" alt="トップ画像" width={1000} height={1000} priority className="h-auto w-auto" />
      </div>
      <div className="text-center my-14">
        <h1 className="text-4xl font-bold mb-3">WanderingQuestとは？</h1>
        <h2 className="text-2xl">ゲーム感覚でウォーキングを楽しめるミッションを提供するウォーキングアプリです。</h2>
      </div>
      <div className="text-center lg:flex lg:space-x-4">
        <div className="border border-gray-200 shadow-lg rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">ミッションを達成しよう！</h2>
          <h3 className="text-xl">マイページのウォーキングを始めるからウォーキング中のミッションが出されます！</h3>
        </div>
        <div className="border border-gray-200 shadow-lg rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">ミッション結果を記録しよう！</h2>
          <h3 className="text-xl">ミッションが終了すると、その時の写真や感想を記録することができます！</h3>
        </div>
        <div className="border border-gray-200 shadow-lg rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">マイページをチェックしよう</h2>
          <h3 className="text-xl">マイページでは、自分がクリアしたミッションを確認できます！</h3>
        </div>
      </div>
      { user ? (
        <Link href={`${url}`} className="border rounded-lg text-xl text-slate-50 font-medium hover:font-extrabold p-4 mt-6 bg-green-300 hover:animate-heartbeat">
            ウォーキングを始めよう！！
        </Link>
      ) : (
        <Modal buttonLabel="ウォーキングを始めよう！！" buttonClass="border rounded-lg text-xl text-slate-50 font-medium p-4 mt-6 bg-green-300 hover:animate-heartbeat">
          <Login />
        </Modal>
      )}
    </main>
  );
}
