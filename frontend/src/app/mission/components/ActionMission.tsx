import React, { useState } from "react";
import ActionOptions from "@/constants/ActionOptions";

const ActionMission = () => {
  const [action, setAction] = useState("");

  const randomActionMission = () => {
    const randomIndex = Math.floor(Math.random() * ActionOptions.length);
    const randomPlan = ActionOptions[randomIndex];
    setAction(randomPlan);
  };

  const handleActionMission = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAction(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 mb-10">
      <label htmlFor="action" className="mb-2 text-xl">何をする？</label>
      <input type="text" id="action" name="action" value={action} onChange={handleActionMission} className="p-2 border border-gray-300 rounded w-100 text-center" placeholder="目的を入力"/>
      <div className="mx-auto mt-5 p-2 bg-blue-500 text-white rounded cursor-pointer w-1/2" onClick={randomActionMission}>
        目的を生成する
      </div>
    </div>
  )
};

export default ActionMission;