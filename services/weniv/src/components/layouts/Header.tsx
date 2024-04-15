import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link href="/">
          <Logo />
        </Link>
      </h1>
      Header
    </header>
  );
}
