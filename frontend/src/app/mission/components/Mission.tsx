import Image from "next/image";
import { MissionDataProps } from '@/types/mission';

const Mission = ({ missionData }: MissionDataProps) => {
  return (
    <div className="relative flex justify-center items-center my-5">
      <div className="flex flex-col justify-center items-center mx-auto gap-8 text-center absolute inset-x-0 top-1/5">
        <h1 className="text-3xl">ミッション</h1>
        <h1 className="text-4xl">{`${missionData.location}で${missionData.action}`}</h1>
        <h1 className="text-3xl">制限時間</h1>
        <h1 className="text-4xl">{`${missionData.timer}:00`}</h1>
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