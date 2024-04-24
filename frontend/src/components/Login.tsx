const Login = () => {
  return (
    <div className="bg-lime-300 mb-8 p-10">
      <h1 className="text-4xl text-center">ユーザー登録</h1>
      <div className="grid justify-items-center my-8">
        <div className="text-xl mb-4">
          <h2>メールアドレス</h2>
          <input type="text" />
        </div>
        <div className="text-xl mb-4">
          <h2>パスワード</h2>
          <input type="password" />
        </div>
      </div>
      <div className="text-center mb-6">
        <button>Googleアカウントでログイン</button>
      </div>
      <div className="text-center mb-4">
        <button>ログイン</button>
      </div>
    </div>
  );
};

export default Login;