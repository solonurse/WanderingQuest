"use client"

import Link from "next/link";
import Modal from "./Modal";
import Login from "./Login";

const PreLoginHeader = () => {
  return (
    <div>
      <ul className="flex gap-4 me-3">
        <li>
          <Link href="/" className="hover:font-extrabold">
            お試し
          </Link>
        </li>
        <li>
          <Modal buttonLabel="Login">
            <Login />
          </Modal>
        </li>
      </ul>
    </div>
  );
};

export default PreLoginHeader;