import Link from 'next/link';
import Image from "next/image";
import useMissionDataInLocalStrage from "@/hooks/useMissionDataInLocalStrage";
import { WalkingButtonClass } from '@/types/mission';

const WalkingButton = ({ walkingButtonPadding }: WalkingButtonClass) => {
  const { missionData } = useMissionDataInLocalStrage();

  return (
    <>
      {missionData ? (
        <Link href="/mission/playingMission"
          className={`flex gap-1 bg-purple-500 hover:bg-purple-600 text-white font-bold whitespace-nowrap border ${walkingButtonPadding} rounded-full shadow-md active:shadow-sm`}
        >
          <Image src="/target.png" alt="ターゲット" width={24} height={24} className="w-auto h-auto" />
          <div>挑戦中のミッション</div>
        </Link>
      ) : (
        <Link href="/mission/createMission"
          className={`flex gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold whitespace-nowrap border ${walkingButtonPadding} rounded-full shadow-md active:shadow-sm`}
        >
          <Image src="/walking.png" alt="歩く人" width={16} height={16} className="w-auto h-auto" />
          <div>ウォーキング開始</div>
        </Link>
      )}
    </>
  );
};

export default WalkingButton;