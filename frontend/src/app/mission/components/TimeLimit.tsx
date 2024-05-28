import { useState } from "react";

const TimeLimit = () => {
  const [timer, setTimer] = useState("60");

  return (
    <div className="flex flex-col gap-2 mx-auto mb-6">
      <div className="text-xl">制限時間</div>
      <div className="flex justify-center">
        <input type="number" className="text-2xl w-1/6 text-center" onChange={(e) => setTimer(e.target.value)} value={timer} />
        <span className="ml-2 text-2xl">分</span>
      </div>
    </div>
  );
};

export default TimeLimit;