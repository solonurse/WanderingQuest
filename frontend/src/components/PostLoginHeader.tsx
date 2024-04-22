import Link from 'next/link';

const PostLoginHeader = () => {
  return (
    <header className="border-b flex items-center p-2 justify-between bg-lime-500 text-white">
      <h1>
        <Link href="/" className="whitespace-pre-wrap font-extrabold">
          {`Wandering\nQuest`}
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="whitespace-pre-wrap">
              ユーザー名
            </Link>
          </li>
          <li>
            <Link href="/" className="whitespace-pre-wrap">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PostLoginHeader;