'use client';
import styles from './HeaderWrap.module.css';

import Link from 'next/link';
import Logo from './Logo';
import '@weniv/components-header/style.css';
import { Header } from '@weniv/components-header';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';
import { useState } from 'react';

export default function HeaderWrap({ props }: { props?: any }) {
  const menu = [
    {
      text: '위니브',
      link: '/weniv',
      list: [
        { text: '회사소개', link: '#' },
        { text: '캐릭터 소개', link: '#' },
        { text: '청년 지원', link: '#' },
      ],
    },
    {
      text: '교육',
      link: '/learn',
      list: [
        { text: '영상 강의', link: '/learn' },
        { text: '도서', link: '#' },
        { text: '코딩테스트', link: '#' },
        { text: '자료실', link: '#' },
      ],
    },
    {
      text: '서비스',
      link: '/serv',
      list: [
        { text: '위니브월드', link: '#' },
        { text: '스터디인', link: '#' },
        { text: '위니브', link: '#' },
        { text: '자료실', link: '#' },
      ],
    },
    {
      text: '행사',
      link: '/event',
    },
    {
      text: '소식',
      link: '/news',
    },
  ];

  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <Header logo={<Logo />}>
      {menu.length > 0 && (
        <nav className={styles.nav}>
          <ul>
            {menu.map((depth1, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {depth1.list ? (
                  <>
                    <Link
                      href={depth1.link}
                      onFocus={() => setHoveredMenu(index)}
                    >
                      {depth1.text}
                      <Icon
                        name="down"
                        width={16}
                        color={hoveredMenu === index ? 'primary' : 'grayLv3'}
                        className={
                          hoveredMenu === index
                            ? `${styles.arrowIcon} ${styles.active}`
                            : styles.arrowIcon
                        }
                      />
                    </Link>

                    {hoveredMenu === index && (
                      <ul className={styles.depth2}>
                        {depth1.list.map((depth2, index) => (
                          <Link key={index} href={depth2.link}>
                            {depth2.text}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={depth1.link}> {depth1.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Header>
  );
}
