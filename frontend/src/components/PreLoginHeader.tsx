"use client"

import Link from "next/link";
import { signIn } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import Modal from "./Modal";
import Login from "./Login";
import { User } from "@/types/login";

const handleGuestSignIn = async (provider: string) => {
  let user: User;

  if (typeof window !== "undefined") {
    const guestUserInLocalStorage = localStorage.getItem('guestUser');
    const guestUserData = guestUserInLocalStorage ? JSON.parse(guestUserInLocalStorage) : null;
    
    if (guestUserData) {
      user = {
        id: guestUserData.id,
        name: guestUserData.name,
        email: guestUserData.email,
      }
    } else {
      user = {
        id: uuidv4(),
        name: 'ゲストユーザー',
        email: `${uuidv4()}@guest.com`,
      };
      localStorage.setItem('guestUser', JSON.stringify(user));
    }
  } else {
    // userの未初期化エラー防止
    user = {
      id: uuidv4(),
      name: 'ゲストユーザー',
      email: `${uuidv4()}@guest.com`,
    };
  };

  await signIn(provider, {
    id: user.id,
    username: user.name,
    email: user.email
  });
};

const PreLoginHeader = () => {
  return (
    <div>
      <ul className="flex gap-4 me-3">
        <li>
          <Link href="/mission/createMission" className="hover:font-extrabold" onClick={() => handleGuestSignIn('credentials')}>
            お試し
          </Link>
        </li>
        <li>
          <Modal buttonLabel="ログイン" buttonClass="">
            <Login />
          </Modal>
        </li>
      </ul>
    </div>
  );
};

export default PreLoginHeader;