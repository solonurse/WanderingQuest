import React, { useContext } from "react";
import { useSession } from 'next-auth/react';
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import Profile from "./Profile";
import { userContext } from "@/context/UserContext";
import useMissionDataInLocalStrage from "@/hooks/useMissionDataInLocalStrage";

const PostLoginHeader = () => {
  const { status } = useSession();
  const user = useContext(userContext);
  const userAvatarURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const { missionData } = useMissionDataInLocalStrage();

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
          { user?.is_guest ? null : (
            <li>
              <Link href={`/mypage/${user?.id}`} className="hover:font-extrabold">
                マイページ
              </Link>
            </li>
          )}
        </ul>
        {missionData ? (
          <div className="flex">
            <Link href="/mission/playingMission" className="flex gap-1 bg-purple-500 hover:bg-purple-600 text-white font-bold whitespace-nowrap border my-auto px-2 py-1 rounded-full shadow-md active:shadow-sm">
              <Image src="/target.png" alt="ターゲット" width={24} height={24} className="w-auto h-auto" />
              <div>挑戦中のミッション</div>
            </Link>
          </div>
        ) : (
          <div className="flex">
            <Link href="/mission/createMission" className="flex gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold whitespace-nowrap border my-auto px-2 py-1 rounded-full shadow-md active:shadow-sm">
              <Image src="/walking.png" alt="歩く人" width={16} height={16} className="w-auto h-auto" />
              <div>ウォーキング開始</div>
            </Link>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default PostLoginHeader;