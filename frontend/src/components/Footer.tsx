"use client";

import Link from "next/link";

const Footer = () => {

  return (
    <footer className="border py-4 bg-slate-50">
      <ul className="flex justify-center gap-8">
        <li>
          <Link href="../regulation/term" className="whitespace-pre-wrap">
            利用規約
          </Link>
        </li>
        <li>
          <Link href="../regulation/privacy" className="whitespace-pre-wrap">
            プライバシーポリシー
          </Link>
        </li>
        <li>
          <Link href="../contact" className="whitespace-pre-wrap">
            お問い合わせ
          </Link>
        </li>
      </ul>
      <p className="text-center pt-2 text-slate-500">© 2024 WanderingQuest</p>
    </footer>
  );
};

export default Footer;
