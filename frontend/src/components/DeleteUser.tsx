import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import axios from 'axios';
import { toast } from "react-toastify";

const DeleteUser = () => {
  const { data: session } = useSession();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const handleDeleteUser = async () => {
    if (!session || !session.user) {
      toast.error("アカウント削除に失敗しました");
      return;
    }

    try {
      const response = await axios.delete(
        `${apiUrl}/users/${session.user.email}`
      )

      if (response.status === 204) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("guestUser");
          localStorage.removeItem("missionData");
        }
        toast.success('アカウントを削除しました', {autoClose: 1500});
        setTimeout(() => {
          signOut({ callbackUrl: '/' });
        }, 1500);
      } else {
        toast.error('アカウント削除に失敗しました');
      }
    } catch (error) {
      return false;
    }
  }

  const deleteConfirm = async () => {
    const res = confirm('本当にアカウントを削除しますか？');
    if (res === true) {
      handleDeleteUser();
    } else {
      return;
    }
  }

  if (session) {
    return (
      <div className='text-center'>
        <button className='hover:bg-gray-100 text-red-500 py-2 px-4 border border-gray-400 rounded shadow-md active:shadow-sm' onClick={() => deleteConfirm()}>アカウントを削除</button>
      </div>
    )
  }
  return null
}

export default DeleteUser;