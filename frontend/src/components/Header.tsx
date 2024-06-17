"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";
import PreLoginHeader from './PreLoginHeader'
import PostLoginHeader from './PostLoginHeader';
import { toast } from "react-toastify";

const Headers = () => {
  const { status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && !isLoggedIn) {
      toast.success('ログインしました');
      setIsLoggedIn(true);
    }
  }, [status, isLoggedIn]);

  return (
    <header className="border-b flex items-center p-2 justify-between bg-lime-500 text-white">
      <h1>
        <Link href="/" className="whitespace-pre-wrap font-extrabold flex">
          <Image src="/logo.png" alt="ロゴ画像" width={50} height={50} className='w-auto h-auto' priority />
          {`Wandering\nQuest`}
        </Link>
      </h1>
      {status === 'authenticated' ? (
          <PostLoginHeader />
        ) : (
          <PreLoginHeader />
        )
      }
    </header>
  );
};

export default Headers;
