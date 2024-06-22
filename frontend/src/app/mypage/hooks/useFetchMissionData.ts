import { useState, useEffect } from "react";
import axios from "axios";
import { MissionRecordData } from "@/types/mission";

const useFetchMissionData = (userId: number | undefined) => {
  const [missionRecords, setMissionRecords] = useState<MissionRecordData[]>([]);

  useEffect(() => {
    const missionData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.get(`${apiUrl}/mission_records/${userId}`);
        setMissionRecords(response.data);
      } catch (error) {
        return;
      }
    };

    if (userId) {
      missionData();
    }
  }, [userId]);
  return { missionRecords, setMissionRecords };
};

export default useFetchMissionData;
