"use client";

import { useSession } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";
import PreLoginHeader from './PreLoginHeader'
import PostLoginHeader from './PostLoginHeader';

const Headers = () => {
  const { data: session, status } = useSession();

  return (
    <header className="border-b flex items-center p-2 justify-between bg-lime-500 text-white">
      <h1>
        <Link href="/" className="whitespace-pre-wrap font-extrabold flex">
          <Image src="/logo.png" alt="ロゴ画像" width={50} height={50} />
          {`Wandering\nQuest`}
        </Link>
      </h1>
      {status === 'authenticated' ? (
          <PostLoginHeader  />
        ) : (
          <PreLoginHeader />
        )
      }
    </header>
  );
};

export default Headers;