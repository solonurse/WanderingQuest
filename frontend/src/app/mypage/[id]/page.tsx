'use client'

import Calendar from './components/Calendar';
import WalkingButton from "@/components/WalkingButton";
import MissionRecord from "./components/MissionRecord";
import useAuthRedirect from "../hooks/useAuthRedirect";
import useFetchMissionData from "../hooks/useFetchMissionData";

const Mypage = () => {
  const { status, user, pathname } = useAuthRedirect();
  const { missionRecords, setMissionRecords } = useFetchMissionData(user?.id);

    if (status === "loading") {
    return <p>Loading...</p>;
  }

    // リダイレクト条件を満たしている場合、nullを返して何もレンダリングしない
  if (status === "unauthenticated" || pathname !== `/mypage/${user?.id}`) {
    return null;
  }

  if (status === "authenticated" && pathname === `/mypage/${user?.id}`) {
    return (
      <div className="bg-green-100 grid md:grid-cols-2 min-h-100">
        <div>
          <h1 className="text-center text-3xl mt-5">ミッション実施日</h1>
          <div className="m-5">
            <Calendar missionRecords={missionRecords} />
          </div>
          <div className="flex justify-around text-lg xl:text-xl my-10">
            <WalkingButton walkingButtonPadding='p-2' />
          </div>
        </div>
        <MissionRecord missionRecords={missionRecords} setMissionRecords={setMissionRecords} />
      </div>
    );
  }
  return null; // 状態が他の場合に対応するためnullを返す
};

export default Mypage;