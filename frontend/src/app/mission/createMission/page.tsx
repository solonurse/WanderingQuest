"use client";

import { useForm, FormProvider } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlaceMission from "../components/PlaceMission";
import ActionMission from "../components/ActionMission";
import TimeLimit from "../components/TimeLimit";
import { MissionData } from "@/types/mission";

const CreateMission = () => {
  const methods = useForm<MissionData>({
    defaultValues: {
      location: "",
      action: "",
      timer: 60
    }
  });

  const router = useRouter();

  const onSubmit = (data: MissionData) => {
    if (typeof window !== "undefined") {
      const startTime = new Date(); // ミッション開始時刻

      const missionDataWithTimestamps = {
        ...data,
        startTime: startTime.toISOString(),
      };

      localStorage.setItem("missionData", JSON.stringify(missionDataWithTimestamps));
      router.push("/mission/playingMission");
    };
  };

  return (
    <div className="grid md:grid-cols-2 bg-yellow-100">
      <div>
        <Image src="/map.png" alt="マップ画像" width={700} height={600} sizes="100vw" className="h-auto" />
      </div>
      <div className="flex flex-col mx-auto gap-8 text-center my-5 w-3/4">
        <h1 className="text-2xl">ミッション作成</h1>
        <FormProvider {...methods}>
          <form className="w-full" onSubmit={methods.handleSubmit(onSubmit)}>
            <PlaceMission />
            <ActionMission />
            <TimeLimit />
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-600 rounded">ミッション開始</button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateMission;
