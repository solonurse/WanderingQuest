import { useState ,useEffect } from "react";
import axios from "axios";
import { UseId, MissionRecordData } from "@/types/mission"
import MissionRecordCard from "./MissionRecordCard";

const MissionRecord: React.FC<UseId> = ({user_id}) => {
  const [missionRecords, setMissionRecords] = useState<MissionRecordData[]>([]);

  useEffect(() => {
    const missionData =  async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
    
        const response = await axios.get(`${apiUrl}/mission_records/${user_id}`);
        setMissionRecords(response.data);
      } catch (error) {
        return
      };
    };
    missionData();
  }, [])

    return (
      <div className="flex flex-col items-center">
        <div className="text-3xl mt-5">ミッション記録</div>
        <div className="flex flex-col bg-white h-screen w-full overflow-y-auto max-w-md lg:max-w-2xl border-2 rounded-md p-4 my-5">
          {missionRecords .length > 0 ? (
            missionRecords.map((missionRecord) => (
              <MissionRecordCard key={missionRecord.id} missionRecord={missionRecord} />
            ))
          ) : (
          <div className=" flex items-center text-3xl h-64">
            <h1>達成したミッションがありません</h1>
          </div>
          )}
        </div>
      </div>
    );
};

export default MissionRecord;