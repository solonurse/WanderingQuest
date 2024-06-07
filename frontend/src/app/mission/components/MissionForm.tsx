import { useState } from "react";
import { ImageLoaderProps } from "next/image";
import useMissionData from "../hooks/useMissionData";
import useHandleSubmit from "../hooks/useHandleSubmit";
import ImagePreview from "./ImagePreview";
import SubmitButtons from "./SubmitButtons";
import { MissionData } from "@/types/mission";

const MissionForm = ({ type }: { type: string }) => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [comment, setComment] = useState("");
  const [prev, setPrev] = useState<string>('')
  const [missionPicture, setMissionPicture] = useState<File | null>(null);

  const missionPictureURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setPrev(fileUrl);
      setMissionPicture(selectedFile);
    };
  };

  useMissionData(setMissionData);

  const handleSubmit = useHandleSubmit({ type, missionData, comment, missionPicture });

  return (
    <div className="flex flex-col items-center justify-center border border-gray-100 rounded-lg shadow md:flex-row bg-neutral-100 p-5 w-3/4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-semibold underline decoration-double decoration-yellow-300">{`${missionData?.location}で${missionData?.action}ミッション${type === "completed" ? "達成！！" : "失敗・・・"}`}</h1>
        { type === "completed" ? (
            <div className="lg:flex gap-2 mx-auto">
              <ImagePreview 
                prev={prev}
                missionPictureURL={missionPictureURL}
                handleFileChange={handleFileChange}
                />
              <div className="mt-5">
                <label htmlFor="comment" className="text-2xl mb-5">今の気持ちをコメントで残しましょう</label>
                <textarea
                  id="comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  className="w-full"
                  placeholder="コメントを入力"
                />
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="comment" className="text-2xl mb-5">今の気持ちをコメントで残しましょう</label>
              <textarea
                id="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className="w-full"
                placeholder="コメントを入力"
              />
            </div>
          )
        }
        <h1 className="text-2xl">今回の結果を記録しますか？</h1>
        <SubmitButtons />
      </form>
    </div>
  );
};

export default MissionForm;
