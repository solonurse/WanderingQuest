"use client";

import React, { useContext } from 'react';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import useHandleSignIn from '@/hooks/useHandleSignIn';
import { userContext } from "@/context/UserContext";

const Login = () => {
  const { status } = useSession();
  const user = useContext(userContext);
  const handleSignIn = useHandleSignIn();

  if (status === 'loading') {
		return <div>Loading...</div>;
	}

  if (status !== 'authenticated' || user?.is_guest) {
    return (
      <div className="bg-lime-300 mb-8 p-10">
        <h1 className="text-4xl text-center mb-6">ユーザーログイン</h1>
        <div className='flex flex-col items-center'>
          <div className="mb-3">
            <button className='w-56 flex items-center gap-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => handleSignIn('google')}>
            <Image src="/google_logo.svg" alt="ロゴ画像" width={24} height={24} />
              Google でログイン
            </button>
          </div>
          <div>
            <button className='w-56 flex items-center gap-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => handleSignIn('github')}>
            <Image src="/github_logo.svg" alt="ロゴ画像" width={24} height={24} />
              <p>Githubでログイン</p>
            </button>
          </div>
        </div>
      </div>
    );
  };
  return null;
};

export default Login;