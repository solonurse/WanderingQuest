import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import SignUp from "./SignUp";
import Login from "./Login";

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
            <Modal buttonLabel="SignUp">
              <SignUp />
            </Modal>
          </li>
          <li>
            <Modal buttonLabel="Login">
              <Login />
            </Modal>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PreLoginHeader;