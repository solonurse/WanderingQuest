import { useState ,useEffect } from "react";
import axios from "axios";
import { UseId, MissionRecordData } from "@/types/mission"

const MissionRecord: React.FC<UseId> = ({user_id}) => {
  const [missionRecords, setMissionRecords] = useState<MissionRecordData[]>([]);

  useEffect(() => {
    const missionData =  async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
    
        const response = await axios.get(`${apiUrl}/mission_records/${user_id}`);
        console.log(response.data);
        console.log(response.data[0].title);
        setMissionRecords(response.data);
      } catch (error) {
        return
      };
    };
    missionData();
  }, [])

    return (
      <div className="bg-blue-100 flex flex-col items-center">
        <div className="text-3xl my-5">ミッション一覧</div>
        {missionRecords !== null ? (
          missionRecords.map((missionRecord) => (
            <div key={missionRecord.id} className="border border-blue-300">
              <div>ミッション内容</div>
              <div>{missionRecord.title}</div>
              <div>{missionRecord.comment}</div>
            </div>
          ))
        ) : (
        <div className=" flex items-center text-3xl h-64">
          <h1>達成したミッションがありません</h1>
        </div>
        )}
      </div>
    );
};

export default MissionRecord;