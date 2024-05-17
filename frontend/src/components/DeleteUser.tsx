import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import axios from 'axios'

const DeleteUser = () => {
  const { data: session } = useSession();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const handleDeleteUser = async () => {
    if (!session || !session.user) {
      alert('アカウント削除に失敗しました');
      return;
    }

    try {
      const response = await axios.delete(
        `${apiUrl}/users/${session.user.email}`
      )

      if (response.status === 204) {
        signOut().then(() => alert("アカウントを削除しました。"));
      } else {
        alert('アカウント削除に失敗しました');
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
        <button className='hover:bg-gray-100 text-red-500 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => deleteConfirm()}>アカウントを削除する</button>
      </div>
    )
  }
  return null
}

export default DeleteUser;