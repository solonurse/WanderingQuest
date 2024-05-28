import { useState } from "react";
import PlaceOptions from "@/constants/PlaceOptions";

const PlaceMission = () => {
  const [location, setLocation] = useState("");

  const randomPlaceMission = () => {
    const randomIndex = Math.floor(Math.random() * PlaceOptions.length);
    const randomPlace = PlaceOptions[randomIndex];
    setLocation(randomPlace);
  };

  const handleActionMission = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 mb-10">
      <label htmlFor="location" className="mb-2 text-xl">どこに行く？</label>
      <input type="text" id="location" name="location" value={location} onChange={handleActionMission} className="p-2 border border-gray-300 rounded w-full text-center" placeholder="場所を入力"/>
      <div className="mx-auto mt-5 p-2 bg-blue-500 text-white rounded cursor-pointer w-1/2" onClick={randomPlaceMission}>
        場所を生成する
      </div>
    </div>
  );
};

export default PlaceMission;