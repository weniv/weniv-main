import Link from 'next/link';
import { clsx } from 'clsx';

import styles from './Nav.module.scss';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';
import LineChartMin from '../LineChartMin';

export default function Nav() {
  const data1 = [14, 36, 32, 16, 12, 7, 6];
  const data2 = [2, 6, 2, 8, 4, 1, 0];
  const data3 = [49, 26, 32, 15, 7, 2, 6];
  const data4 = [15, 24, 2, 15, 7, 2, 6];
  const data5 = [8, 10, 16, 15, 24, 20, 40];

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={clsx([styles.link, styles.active])}>
            <Icon name="home" width={24} />
            Overview
          </Link>
        </li>
        <li>
          {/* 60a5fa */}
          <Link href="/wenivworld" className={styles.chart}>
            위니북스
            <LineChartMin text="위니북스" values={data1} />
          </Link>
        </li>
        <li>
          {/*  2dd4bf */}
          <Link href="/wenivworld" className={styles.chart}>
            위니브 월드
            <LineChartMin text="위니브 월드" values={data2} />
          </Link>
        </li>
        <li>
          {/*  6366f1 */}
          <Link href="/wenivworld" className={styles.chart}>
            위니브 SQL
            <LineChartMin text="위니브 SQL" values={data3} />
          </Link>
        </li>
        <li>
          {/* facc15 */}
          <Link href="/wenivworld" className={styles.chart}>
            위니브 링크
            <LineChartMin text="위니브 링크" values={data4} />
          </Link>
        </li>
        <li>
          <Link href="/wenivworld" className={clsx([styles.chart])}>
            위니브 노트북
            <LineChartMin text="위니브 노트북" values={data5} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
