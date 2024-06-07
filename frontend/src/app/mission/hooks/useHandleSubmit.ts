import { useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { userContext } from "@/context/UserContext";
import { HandleSubmitProps } from "@/types/mission";

const useHandleSubmit = ({ type, missionData, comment, missionPicture }: HandleSubmitProps) => {
  const router = useRouter();
  const user = useContext(userContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;

    if (submitter.name === "recordButton") {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const formData = new FormData();
  
      formData.append("title", `${missionData?.location}で${missionData?.action}ミッション${type === "completed" ? "達成！！" : "失敗・・・"}`);
      formData.append("timer", `${missionData?.timer}`);
      formData.append("comment", comment);
      formData.append("mission_picture", missionPicture || "");
      formData.append("result", type === "completed" ? "達成" : "失敗");
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      };
  
      try {
        const response = await axios.post(`${apiUrl}/mission_records/${user?.id}`, formData, config);
  
        if (response.status === 200) {
          if (typeof window !== "undefined") {
            localStorage.removeItem("missionData");
          }
          toast.success("記録しました");
          router.push(`/mypage/${user?.id}`);
        } else {
          toast.error("記録に失敗しました");
        }
      } catch (error) {
        toast.error("記録に失敗しました");
      }
    } else if (submitter.name === "notRecordButton") {
      // 「記録しない」ボタンがクリックされた場合
      if (typeof window !== "undefined") {
        localStorage.removeItem("missionData");
      }
      router.push(`/mypage/${user?.id}`);
    }
  };

  return handleSubmit;
};

export default useHandleSubmit;
