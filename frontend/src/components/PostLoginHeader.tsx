import React, { useContext } from "react";
import { useSession } from 'next-auth/react';
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Profile from "./Profile";
import { userContext } from "@/context/UserContext";

const PostLoginHeader = () => {
  const { status } = useSession();
  const user = useContext(userContext);
  const route = useRouter();
  const userAvatarURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const handleWalkingSubmit = () => {
    if (typeof window !== "undefined") {
      const missionDataInLocalStorage = localStorage.getItem("missionData");
      const missionData = missionDataInLocalStorage ? JSON.parse(missionDataInLocalStorage) : null;
      missionData ? route.push("/mission/playingMission") : route.push("/mission/createMission");
    }
  };

  if (status === 'authenticated') {
    return (
      <div className="flex flex-col items-center gap-2 lg:flex lg:flex-row lg:gap-2">
        <ul className="flex gap-3 items-center">
          <li>
            {user?.avatar.url ?
              <Image loader={userAvatarURL} src={user.avatar.url} alt="ユーザーアイコン" width={56} height={56} className="rounded-full mx-auto" /> :
              <Image src="/user_icon.png" alt="デフォルトユーザーアイコン" width={32} height={32} className="rounded-full mx-auto bg-white p-2" />
            }
          </li>
          <li>
            <Modal buttonLabel={user?.name ?? "ログインユーザー"} buttonClass="">
              <Profile />
            </Modal>
          </li>
          { !user?.is_guest && (
            <li>
              <Link href={`/mypage/${user?.id}`} className="hover:font-extrabold">
                マイページ
              </Link>
            </li>
          )}
        </ul>
        <div className="flex ml-auto">
          <button className="hover:font-extrabold" onClick={handleWalkingSubmit}>ウォーキングする</button>
        </div>
      </div>
    );
  }
  return null;
};

export default PostLoginHeader;