import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Modal from "./Modal";
import Profile from "./Profile";

const PostLoginHeader = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <Modal buttonLabel={session.user?.name ?? "ログインユーザー"}>
            <Profile />
          </Modal>
        </li>
        <li>
          <button onClick={() => signOut()} className="hover:font-extrabold">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
  }
  return null;
};

export default PostLoginHeader;