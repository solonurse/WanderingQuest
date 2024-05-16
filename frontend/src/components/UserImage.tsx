import { useState, useContext } from "react";
import axios from "axios";
import Image, { ImageLoaderProps } from "next/image";
import { userContext } from "@/context/UserContext";

const UserImage= () => {
  const user = useContext(userContext);
  const userAvatarURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`
  };
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const [prev, setPrev] = useState<string | null>(user?.avatar.url ?? null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const formData = new FormData();
    formData.append("user[avatar]", newAvatar || "");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(`${apiUrl}/avatars/${user?.id}`,
                                        formData,
                                        config);

    if (response.status === 200) {
      alert("アイコンを更新しました");
    };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setNewAvatar(selectedFile)
      setPrev(fileUrl);
    };
  };

  return (
    <div>
      {prev ?
        <Image loader={userAvatarURL} src={prev} alt="プレビュー画像" width={200} height={200} className="rounded-full mx-auto p-2" /> :
        <Image src="/user_icon.png" alt="デフォルト画像" width={200} height={200} className="rounded-full mx-auto bg-white p-2" />
      };
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="submit" className='hover:bg-gray-100 text-red-500 py-2 px-4 border border-gray-400 rounded shadow' value="Upload" />
      </form>
    </div>
  );
};

export default UserImage;