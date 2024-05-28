"use client";

import Image from "next/image";
import PlaceMission from "../components/PlaceMission";
import ActionMission from "../components/ActionMission";
import TimeLimit from "../components/TimeLimit";

const CreateMission = () => {
  return (
    <div className="grid md:grid-cols-2 bg-yellow-100">
      <div>
        <Image src="/map.png" alt="マップ画像" width={700} height={600} sizes="100vw" className="h-auto " />
      </div>
      <div className="flex flex-col mx-auto gap-8 text-center my-5 w-3/4">
        <h1 className="text-2xl">ミッション作成</h1>
        <form className="w-full">
          <PlaceMission />
          <ActionMission />
          < TimeLimit />
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-600 rounded">ミッション開始</button>
        </form>
      </div>
    </div>
  );
};

export default CreateMission;
