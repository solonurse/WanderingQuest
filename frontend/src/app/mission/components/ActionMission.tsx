import ActionOptions from "@/constants/ActionOptions";
import { useFormContext } from "react-hook-form";

const ActionMission = () => {
  const { register,  setValue, formState: { errors } } = useFormContext();

  const randomActionMission = () => {
    const randomIndex = Math.floor(Math.random() * ActionOptions.length);
    const randomPlan = ActionOptions[randomIndex];
    setValue("action", randomPlan);
  };

  return (
    <div className="flex flex-col gap-2 mb-10">
      <label htmlFor="action" className="mb-2 text-xl">何をする？</label>
      <input
        type="text"
        id="action"
        {...register("action", { required: "目的を入力してください" })}
        className="p-2 border border-gray-300 rounded w-100 text-center"
        placeholder="目的を入力"
      />
      {errors.action && <p className="text-red-500">{errors.action.message as string}</p>}
      <div className="mx-auto mt-5 p-2 bg-blue-500 text-white rounded cursor-pointer w-1/2" onClick={randomActionMission}>
        目的を生成する
      </div>
    </div>
  )
};

export default ActionMission;