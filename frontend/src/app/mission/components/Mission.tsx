import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { MissionDataProps } from '@/types/mission';

const Mission = ({ missionData }: MissionDataProps) => {
  const secondTime = missionData.timer * 60; // タイマーの初期値を秒単位で設定
  const [countTimer, setCountTimer] = useState(secondTime);

  useEffect(() => {
    const updateTimer = () => {
      const startTime = new Date(missionData.startTime).getTime();
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const remainingTime = Math.max(secondTime - elapsedTime, 0);
      setCountTimer(remainingTime);
    }

    updateTimer();

    if (countTimer > 0) {
      const timerId = setInterval(updateTimer, 1000);
      return () => clearInterval(timerId);
    }
  }, []);

  // タイマーが5分を切ったらタイマーの色を赤色にする
  const timerClass = countTimer < 300 ? 'text-red-500' : 'text-black';

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <div className="relative flex justify-center items-center my-5">
      <div className="flex flex-col justify-center items-center mx-auto gap-8 text-center font-mono font-bold absolute inset-x-0 top-1/5">
        <h1 className="text-3xl">ミッション</h1>
        <h1 className="text-4xl">{`${missionData.location}で`}</h1>
        <h1 className="text-4xl">{`${missionData.action}`}</h1>
        <h1 className="text-3xl">制限時間</h1>
        <h1 className={`text-4xl ${timerClass}`}>{formatTime(countTimer)}</h1>
        <div className="flex gap-4 mt-5 ms-1">
          <button className="text-2xl bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-green-400/50 active:shadow-md transition-shadow duration-200">成功</button>
          <button className="text-2xl bg-gradient-to-br from-red-300 to-red-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-red-400/50 active:shadow-md transition-shadow duration-200">失敗</button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Image src="/mission.png" alt="ミッション画像" width={600} height={600} />
      </div>
    </div>
  )
}

export default Mission;