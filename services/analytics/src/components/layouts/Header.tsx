import Link from 'next/link';
import Period from '../Period';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-16">
      <h1 className="font-bold text-4xl text-slate-800">
        <Link href="/">
          Weniv <span className="text-emerald-500">Analytics,</span>
        </Link>
      </h1>
      <Period />
    </header>
  );
}
