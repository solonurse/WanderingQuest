import { useState } from "react";
import axios from "axios";
import Image, { ImageLoaderProps } from "next/image";
import { toast } from "react-toastify";
import { MissionRecordDataProps } from "@/types/mission"

const MissionRecordCard: React.FC<MissionRecordDataProps> = ({missionRecord, missionRecords, setMissionRecords}) => {
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
  };

  const handleDeleteSubmit = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axios.delete(`${apiUrl}/mission_records/${missionRecord.id}`);
      if (response.status === 200) {
        toast.success("記録を削除しました");
        const newMissionRecords = missionRecords.filter((record) => record.id !== missionRecord.id);
        console.log(newMissionRecords);
        setMissionRecords(newMissionRecords);
      } else {
        toast.error("記録の削除に失敗しました");
      }
    } catch {
      toast.error("記録の削除に失敗しました");
    }
  };

  const deleteConfirm = () => {
    const res = confirm('記録を削除しますか？');
    if (res === true) {
      handleDeleteSubmit();
    } else {
      return;
    }
  };

  const dateTime = new Date(missionRecord.created_at);
  const date = dateTime.toLocaleDateString(); // 日付を取得
  const time = dateTime.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }); // 時間を取得

  return (
    <div id={`record${missionRecord.id}`} className="max-w-sm lg:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3 mx-auto w-full">
      <div className="w-full">
        {missionRecord.mission_picture.url ?
          <Image loader={missionPictureURL} src={missionRecord.mission_picture.url} alt="ミッション画像" width={512} height={512} className="w-auto h-auto" /> :
          null
        }
      </div>
      <h1 className={`text-xl font-bold mt-3 ${missionRecord.result === "達成" ? "text-blue-500" : "text-red-500"}`}>{missionRecord.title}</h1>
      <div>
        <label className="text-lg mt-3 mb-1">コメント</label>
        <textarea onChange={(e) => {setComment(e.target.value)}} value={comment} className="text-lg w-full border-4" />
        <div className="text-center">
          <button onClick={handleEditComment} className="bg-white py-2 px-3 border border-gray-400 rounded shadow-md active:shadow-sm">コメントを更新</button>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <div className="text-end mt-3">{date} {time}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mt-2" onClick={deleteConfirm}>
          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default MissionRecordCard;
