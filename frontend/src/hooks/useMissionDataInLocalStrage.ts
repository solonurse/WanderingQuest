import { useState, useEffect } from "react";
import { MissionData } from "@/types/mission";

const useMissionDataInLocalStrage = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const missionDataInLocalStorage = localStorage.getItem("missionData");
      const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : null;
      setMissionData(missionData);
    }
  }, []);

  return { missionData, setMissionData };
};

export default useMissionDataInLocalStrage;
