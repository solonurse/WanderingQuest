import Link from 'next/link';

const PreLoginHeader = () => {
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
              お試し
            </Link>
          </li>
          <li>
            <Link href="/" className="whitespace-pre-wrap">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/" className="whitespace-pre-wrap">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PreLoginHeader;