import Link from 'next/link';

import Nav from './Nav';

import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          Weniv <span>Analytics,</span>
        </Link>
      </h1>
      <Nav />
    </header>
  );
}
