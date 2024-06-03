"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { MissionData } from '@/types/mission';

const MissionFailed = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const missionDataInLocalStorage = localStorage.getItem("missionData");
      const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : null;
      setMissionData(missionData);
    }
  }, []);
  return (
    <div className="flex flex-col gap-8 items-center bg-gray-300 pb-5 lg:py-5">
      <Image src="/mission_failed.png" alt="ミッション失敗" width={800} height={800} />
      <h1 className="text-3xl mx-auto font-bold">
        挫折は成功の階段の一部です。次回に向けて再挑戦しましょう！
      </h1>
      <div className="flex flex-col items-center justify-center border border-gray-100 rounded-lg shadow md:flex-row bg-neutral-100 p-5 w-3/4">
        <form action="post" className="flex flex-col gap-5 items-center">
          <h1 className="text-3xl font-semibold underline decoration-double decoration-yellow-300">{`${missionData?.location}で${missionData?.action}ミッションに失敗・・・`}</h1>
          <div className="">
            <label htmlFor="comment" className="text-2xl mb-5">今の気持ちをコメントで残しましょう</label>
            <textarea id="comment" className="w-full" placeholder="コメントを入力" />
          </div>
          <h1 className="text-2xl">今回の結果を記録しますか？</h1>
          <div>
            <button type="submit" className="me-5 text-2xl bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-green-400/50 active:shadow-md transition-shadow duration-200">記録する</button>
            <button type="submit" className="text-2xl bg-gradient-to-br from-red-300 to-red-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-red-400/50 active:shadow-md transition-shadow duration-200">記録しない</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default MissionFailed;