import React from 'react';
import { useSession, signIn } from 'next-auth/react';

const Login = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
		return <div>Loading...</div>;
	}

  if (status !== 'authenticated') {
    return (
      <div className="bg-lime-300 mb-8 p-10">
        <h1 className="text-4xl text-center">ユーザー登録</h1>
        <div className="text-center mb-6">
          <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
            Googleアカウントでログイン
          </button>
        </div>
        <div className="text-center mb-6">
          <button onClick={() => signIn('github', {}, { prompt: 'login' })}>
            Githubアカウントでログイン
          </button>
        </div>
      </div>
    );
  };
  return null;
};

export default Login;