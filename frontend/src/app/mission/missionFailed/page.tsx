"use client"

import { useContext } from "react";
import Image from "next/image";
import GuestUserMessage from "../components/GuestUserMessage";
import MissionForm from "../components/MissionForm";
import { userContext } from "@/context/UserContext";

const MissionFailed = () => {
  const user = useContext(userContext);

  return (
    <div className="flex flex-col gap-8 items-center bg-gray-300 pb-5 lg:py-5">
      <Image src="/mission_failed.png" alt="ミッション失敗" width={800} height={800} />
      <h1 className="text-3xl mx-auto font-bold">
        挫折は成功の階段の一部です。次回に向けて再挑戦しましょう！
      </h1>
      { user?.is_guest ? <GuestUserMessage /> : <MissionForm type="failed" /> }
    </div>
  );
};

export default MissionFailed;