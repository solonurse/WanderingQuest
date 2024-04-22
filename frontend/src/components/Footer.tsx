import Link from "next/link";

const Footer = () => {

  return (
    <footer className="border-t py-4 bg-slate-50">
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <Link href="Regulation/Term" className="whitespace-pre-wrap">
              利用規約
            </Link>
          </li>
          <li>
            <Link href="/Regulation/PrivacyPolicy" className="whitespace-pre-wrap">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="whitespace-pre-wrap">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-center pt-2 text-slate-500">© 2024 WanderingQuest</p>
    </footer>
  );
};

export default Footer;