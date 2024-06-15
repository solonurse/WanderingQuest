"use client"

import Modal from "./Modal";
import Login from "./Login";
import useHandleSignIn from '@/hooks/useHandleSignIn';

const PreLoginHeader = () => {
  const handleSignIn = useHandleSignIn();

  return (
    <div>
      <ul className="flex gap-4 me-3">
        <li>
          <button className="hover:font-extrabold" onClick={() => handleSignIn('credentials')}>
            ゲストログイン
          </button>
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