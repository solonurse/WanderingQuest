import Link from 'next/link';
import Image from "next/image";

const PreLoginHeader = () => {
  return (
    <header className="border-b flex items-center p-2 justify-between bg-lime-500 text-white">
      <h1>
        <Link href="/" className="whitespace-pre-wrap font-extrabold flex">
          <Image src="/logo.png" alt="ロゴ画像" width={50} height={50} />
          {`Wandering\nQuest`}
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              お試し
            </Link>
          </li>
          <li>
            <Link href="/">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PreLoginHeader;