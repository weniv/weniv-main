import { Suspense } from 'react';

import styles from './layout.module.css';

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className={styles.wrap}>{children}</div>
    </Suspense>
  );
}
