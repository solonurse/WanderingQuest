import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import axios from 'axios'

const DeleteUser = () => {
  const { data: session } = useSession()

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const handleDeleteUser = async () => {
    if (!session || !session.user) {
      alert('セッションが存在しません');
      return
    }

    try {
      const response = await axios.delete(
        `http://localhost:3001/users/${session.user.email}`
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

  if (session) {
    console.log(session.user);
    return (
      <div>
        <button className='hover:bg-gray-100 text-red-500 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => handleDeleteUser()}>アカウントを削除する</button>
      </div>
    )
  }
  return null
}

export default DeleteUser;