"use client";

import { useFormContext } from "react-hook-form";

const TimeLimit = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-2 mx-auto mb-6">
      <label htmlFor="timer" className="mb-2 text-xl">制限時間</label>
      <div className="flex justify-center">
        <input
          type="number"
          id="timer"
          {...register("timer", { required: "制限時間を入力してください。" })} 
          className="text-2xl w-1/6 text-center"
        />
        <span className="ml-2 text-2xl">分</span>
      </div>
      {errors.timer && <p className="text-red-500">{errors.timer.message as string}</p>}
    </div>
  );
};

export default TimeLimit;