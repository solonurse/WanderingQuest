import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { MissionData } from '@/types/mission';
import useMissionData from "@/hooks/useMissionData";

const WalkingButton = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);

  useMissionData(setMissionData);

  return (
    <div className="flex justify-around text-lg xl:text-xl my-10">
      <Link href="/mission/createMission" className="flex gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold whitespace-nowrap border p-2 rounded-full shadow-md active:shadow-sm">
        <Image src="/walking.png" alt="歩く人" width={16} height={16} className="w-auto h-auto" />
        ウォーキング開始
      </Link>
      {missionData ? (
        <Link href="/mission/playingMission" className="flex gap-1 bg-purple-500 hover:bg-purple-600 text-white font-bold whitespace-nowrap border p-2 rounded-full shadow-md active:shadow-sm">
          <Image src="/target.png" alt="歩く人" width={24} height={24} className="w-auto h-auto" />
          挑戦中のミッション
        </Link>

      ) : (
        null
      )}
    </div>
  );
};

export default WalkingButton;