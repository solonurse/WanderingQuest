import { useEffect } from "react";
import { MissionData } from "@/types/mission";

const useMissionData = (setMissionData: React.Dispatch<React.SetStateAction<MissionData | null>>) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const missionDataInLocalStorage = localStorage.getItem("missionData");
      const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : null;
      setMissionData(missionData);
    }
  }, []);
};

export default useMissionData;
