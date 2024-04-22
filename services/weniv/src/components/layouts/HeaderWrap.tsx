'use client';

import Logo from './Logo';

// header
import '@weniv/components-header/style.css';
import { Header } from '@weniv/components-header';

import { menuList } from '@/src/data/weniv.json';

export default function HeaderWrap() {
  return <Header logo={<Logo />} menuList={menuList} />;
}
