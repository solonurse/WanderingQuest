"use client"

import Image from "next/image";

const PlayingMission = () => {
  const missionDataInLocalStorage = localStorage.getItem("missionData")
  const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : "";
  console.log(missionData.location, missionData.action, missionData.timer);

  return (
    <div className="grid md:grid-cols-2 bg-yellow-100">
    <div>
      <Image src="/map.png" alt="マップ画像" width={700} height={600} sizes="100vw" className="h-auto " />
    </div>
    <div className="flex flex-col mx-auto gap-8 text-center my-5 w-3/4">
      <h1 className="text-2xl">ミッション開始</h1>
      <form className="w-full">

      </form>
    </div>
  </div>
  );
};

export default PlayingMission;
