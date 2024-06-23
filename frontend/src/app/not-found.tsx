import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col mx-auto w-full">
      <Image src="/404.png" alt="ミッション失敗" width={1000} height={1000} className="w-auto h-auto" />
      <div className="flex justify-center mb-5">
        <Link href="/" className="border rounded-lg text-xl text-slate-50 font-medium hover:font-extrabold p-4 mt-6 bg-red-300">
          HOME
        </Link>
      </div>
    </div>
  )
}