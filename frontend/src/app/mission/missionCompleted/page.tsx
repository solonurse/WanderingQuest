"use client"

import { useState, useEffect } from "react";
import Image, { ImageLoaderProps } from "next/image";
import { MissionData } from '@/types/mission';

const MissionCompleted = () => {
    const [missionData, setMissionData] = useState<MissionData | null>(null);
    const missionPictureURL = ({ src, width, quality }: ImageLoaderProps)  => {
      return `${src}?w=${width}&q=${quality || 75}`
    };
    const [prev, setPrev] = useState<string>('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        const fileUrl = URL.createObjectURL(selectedFile);
        setPrev(fileUrl);
      };
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        const missionDataInLocalStorage = localStorage.getItem("missionData");
        const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : null;
        setMissionData(missionData);
      }
    }, []);
    return (
      <div className="flex flex-col gap-8 items-center bg-yellow-100 pb-5 lg:py-5">
        <Image src="/mission_completed.png" alt="ミッション失敗" width={800} height={800} />
        <div>
          <h1 className="text-3xl mx-auto font-bold text-center">
            ミッション達成おめでとうございます！
          </h1>
          <h1 className="text-3xl mx-auto font-bold">
            この素晴らしい瞬間を写真や感想とともに記録しましょう！！
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center border border-orange-200 rounded-lg shadow md:flex-row bg-orange-200 p-5 w-3/4">
          <form action="post" className="flex flex-col gap-5 items-center">
            <h1 className="text-3xl font-semibold underline decoration-double decoration-green-200">{`${missionData?.location}で${missionData?.action}ミッション達成!!`}</h1>
            <div className="lg:flex gap-2 mx-auto">
              <div className="mt-5">
                <div>
                  {prev ?
                    <Image loader={missionPictureURL} src={prev} alt="プレビュー画像" width={300} height={300} className="mx-auto p-2" /> :
                    <div className="text-lg mb-1">
                      画像が選択されていません
                    </div>
                  }
                </div>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="mt-5">
                <label htmlFor="comment" className="text-2xl mb-5">今の気持ちをコメントで残しましょう</label>
                <textarea id="comment" className="w-full" rows={5} placeholder="コメントを入力" />
              </div>
            </div>
            <h1 className="text-2xl">今回の結果を記録しますか？</h1>
            <div>
              <button type="submit" className="me-5 text-2xl bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-green-400/50 active:shadow-md transition-shadow duration-200">記録する</button>
              <button type="submit" className="text-2xl bg-gradient-to-br from-red-300 to-red-800 hover:bg-gradient-to-tl text-white rounded-lg p-2 shadow-2xl shadow-red-400/50 active:shadow-md transition-shadow duration-200">記録しない</button>
            </div>
          </form>
        </div>
      </div>
  )
};

export default MissionCompleted;