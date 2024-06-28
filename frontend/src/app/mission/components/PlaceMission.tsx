import { useFormContext } from "react-hook-form";
import PlaceOptions from "@/constants/PlaceOptions";

const PlaceMission = () => {
  const { register,  setValue, formState: { errors } } = useFormContext();

  const randomPlaceMission = () => {
    const randomIndex = Math.floor(Math.random() * PlaceOptions.length);
    const randomPlace = PlaceOptions[randomIndex];
    setValue("location", randomPlace);
  };

  return (
    <div className="flex flex-col gap-2 mb-10">
      <label htmlFor="location" className="mb-2 text-xl">どこに行く？</label>
      <input
        type="text"
        id="location"
        {...register("location", {
          required: "場所を入力してください。",
        })}
        className="p-2 border border-gray-300 rounded w-full text-center"
        placeholder="場所を入力"
      />
      {errors.location && <p className="text-red-500">{errors.location.message as string}</p>}
      <div className="mx-auto mt-5 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer w-1/2 shadow-md active:shadow-sm" onClick={randomPlaceMission}>
        場所を生成する
      </div>
    </div>
  );
};

export default PlaceMission;