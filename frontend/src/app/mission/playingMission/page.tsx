"use client";

import Image from "next/image";
import { useState } from "react";
import Mission from "../components/Mission"
import { MissionData } from '@/types/mission';
import useMissionData from "@/hooks/useMissionData";

const PlayingMission = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);

  useMissionData(setMissionData);

  return (
    <div className="grid md:grid-cols-2 bg-yellow-100 h-auto pb-5">
      <div className="flex justify-center items-center">
        <Image src="/search.gif" alt="探索中の画像" width={550} height={550} unoptimized />
      </div>
      {missionData ? (
        <Mission missionData={missionData} />
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">ミッションデータが見つかりません</h1>
        </div>
      )}
    </div>
  );
};

export default PlayingMission;
