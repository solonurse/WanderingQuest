"use client"

import Image from "next/image";
import MissionForm from "../components/MissionForm";

const MissionCompleted = () => {
    return (
      <div className="flex flex-col gap-8 items-center bg-yellow-100 pb-5 lg:py-5">
        <Image src="/mission_completed.png" alt="ミッション失敗" width={800} height={800} />
        <div>
          <h1 className="text-3xl mx-auto font-bold text-center">
            ミッション達成おめでとうございます！
          </h1>
          <h1 className="text-3xl mx-auto font-bold">
            この素晴らしい瞬間を写真や感想とともに記録しましょう！！
          </h1>
        </div>
        <MissionForm type="completed" />
      </div>
  )
};

export default MissionCompleted;