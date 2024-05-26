import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-yellow-100 flex-col items-center justify-center p-24">
      <div>
        <Image src="/header.png" alt="トップ画像" width={1000} height={1000} sizes="100vw" priority className="h-auto" />
      </div>
      <div className="text-center my-14">
        <h1 className="text-4xl font-bold mb-3">WanderingQuestとは？</h1>
        <h2 className="text-2xl">ゲーム感覚でウォーキングを楽しめるミッションを提供するウォーキングアプリです。</h2>
      </div>
      <div className="text-center lg:flex lg:space-x-4">
        <div className="border border-gray-200 shadow rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">ミッションを達成しよう！</h2>
          <h3 className="text-xl">マイページのウォーキングを始めるからウォーキング中のミッションが出されます！</h3>
        </div>
        <div className="border border-gray-200 shadow rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">ミッション結果を記録しよう！</h2>
          <h3 className="text-xl">ミッションが終了すると、その時の写真や感想を記録することができます！</h3>
        </div>
        <div className="border border-gray-200 shadow rounded-lg bg-white p-6 mb-4">
          <h2 className="text-2xl font-bold">マイページをチェックしよう</h2>
          <h3 className="text-xl">マイページでは、自分がクリアしたミッションを確認できます！</h3>
        </div>
      </div>
      <Link href="/" className="border rounded-lg p-3 mt-6 bg-green-300 hover:animate-heartbeat">
          ウォーキングを始めよう！
      </Link>
    </main>
  );
}
