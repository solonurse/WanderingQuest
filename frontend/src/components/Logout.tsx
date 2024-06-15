import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { signOut } from 'next-auth/react';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleSignOut = () => {
    setIsLoggedOut(true);
    setTimeout(() => {
      signOut({ callbackUrl: '/' });
    }, 1500);
  };

  useEffect(() => {
    if (isLoggedOut) {
      toast.info('ログアウトしています・・・', {autoClose: 1500});
      setIsLoggedOut(false);
    }
  }, [isLoggedOut]);

  return (
    <div className='text-center'>
      <button onClick={handleSignOut} className="hover:bg-gray-100 text-blue-500 py-2 px-4 border border-gray-400 rounded shadow-md active:shadow-sm">
        ログアウト
      </button>
    </div>
  );
};

export default Logout;