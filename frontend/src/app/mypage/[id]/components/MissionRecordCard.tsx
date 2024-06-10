import { useState, useContext } from "react";
import axios from "axios";
import Image, { ImageLoaderProps } from "next/image";
import { toast } from "react-toastify";
import { MissionRecordDataProps } from "@/types/mission"

const MissionRecordCard: React.FC<MissionRecordDataProps> = ({missionRecord}) => {
  const [comment, setComment] = useState(missionRecord.comment);

  const missionPictureURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`
  };

  const handleEditComment = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const formData = new FormData();

    try {
      formData.append("mission_record[comment]", comment);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      };
      const response = await axios.put(`${apiUrl}/mission_records/${missionRecord.id}`, formData, config);

      if (response.status === 200) {
        toast.success("コメントを更新しました");
      } else {
        toast.error("コメントの更新に失敗しました");
      }
    }catch {
      toast.error("コメントの更新に失敗しました");
    }
  }

  const dateTime = new Date(missionRecord.created_at);

  const date = dateTime.toLocaleDateString(); // 日付を取得

  const time = dateTime.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }); // 時間を取得

  return (
    <div className="max-w-sm lg:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3 mx-auto w-full">
      <div className="w-full">
        {missionRecord.mission_picture.url ?
          <Image loader={missionPictureURL} src={missionRecord.mission_picture.url} alt="ミッション画像" width={512} height={512} className="w-auto h-auto" /> :
          null
        }
      </div>
      <h1 className={`text-xl font-bold mt-3 ${missionRecord.result === "達成" ? "text-blue-500" : "text-red-500"}`}>{missionRecord.title}</h1>
      <div>
        <h2 className="text-lg mt-3 mb-1">コメント</h2>
        <textarea onChange={(e) => {setComment(e.target.value)}} value={comment} className="text-lg w-full border-4" />
        <div className="text-center">
          <button onClick={handleEditComment} className="bg-white py-2 px-3 border border-gray-400 rounded shadow-md active:shadow-sm">コメントを更新</button>
        </div>
      </div>
      <div className="text-end mt-3">{date} {time}</div>
    </div>
  );
};

export default MissionRecordCard;
