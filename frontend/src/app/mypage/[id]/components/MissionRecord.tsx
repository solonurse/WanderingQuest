import MissionRecordCard from "./MissionRecordCard";
import { MissionRecordsProps } from "@/types/mission"

const MissionRecord: React.FC<MissionRecordsProps> = ({missionRecords, setMissionRecords}) => {
    return (
      <div className="flex flex-col items-center">
        <div className="text-3xl mt-5">ミッション記録</div>
        <div className="flex flex-col bg-white h-screen w-full overflow-y-auto max-w-md lg:max-w-2xl border-2 rounded-md p-4 my-5">
          {missionRecords .length > 0 ? (
            missionRecords.map((missionRecord) => (
              <MissionRecordCard key={missionRecord.id} missionRecord={missionRecord} missionRecords={missionRecords} setMissionRecords={setMissionRecords} />
            ))
          ) : (
          <div className=" flex items-center justify-center text-3xl h-64">
            <h1>ミッション記録がありません</h1>
          </div>
          )}
        </div>
      </div>
    );
};

export default MissionRecord;