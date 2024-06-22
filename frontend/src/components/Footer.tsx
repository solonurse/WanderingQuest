"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="border py-4 bg-slate-50">
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <button onClick={() => router.push('/regulation/term')} className="whitespace-pre-wrap">
              利用規約
            </button>
          </li>
          <li>
            <button onClick={() => router.push('/regulation/privacy')} className="whitespace-pre-wrap">
              プライバシーポリシー
            </button>
          </li>
          <li>
            <button onClick={() => router.push('/contact')} className="whitespace-pre-wrap">
              お問い合わせ
            </button>
          </li>
        </ul>
      </nav>
      <p className="text-center pt-2 text-slate-500">© 2024 WanderingQuest</p>
    </footer>
  );
};

export default Footer;
