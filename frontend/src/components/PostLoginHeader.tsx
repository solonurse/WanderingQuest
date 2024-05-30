import React, { useContext } from "react";
import { useSession, signOut } from 'next-auth/react';
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import Profile from "./Profile";
import { userContext } from "@/context/UserContext";
import { PostLoginHeaderProps } from "@/types/login";

const PostLoginHeader = ({setIsLoggedOut}: PostLoginHeaderProps) => {
  const { status } = useSession();
  const user = useContext(userContext);
  const userAvatarURL = ({ src, width, quality }: ImageLoaderProps)  => {
    return `${src}?w=${width}&q=${quality || 75}`
  };
  const handleSignOut = () => {
    setIsLoggedOut(true);
    setTimeout(() => {
      signOut();
    }, 1500)
  };

  if (status === 'authenticated') {
    return (
      <div>
        <ul className="flex gap-3">
          <li className='my-1'>
            {user?.avatar.url ?
              <Image loader={userAvatarURL} src={user.avatar.url} alt="ユーザーアイコン" width={32} height={32} className="rounded-full mx-auto" /> :
              <Image src="/user_icon.png" alt="デフォルトユーザーアイコン" width={32} height={32} className="rounded-full mx-auto bg-white p-2" />
            }
          </li>
          <li className='my-2'>
            <Modal buttonLabel={user?.name ?? "ログインユーザー"}>
              <Profile />
            </Modal>
          </li>
          <li className='my-2'>
            <Link href={`/mypage/${user?.id}`}>
              マイページ
            </Link>
          </li>
          <li className='my-2'>
            <button onClick={handleSignOut} className="hover:font-extrabold">
              ログアウト
            </button>
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

export default PostLoginHeader;