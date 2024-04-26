'use client';

import Logo from './Logo';

// header
import '@weniv/components-header/style.css';
import { Header } from '@weniv/components-header';

import data from '@data/weniv.json';

export default function HeaderWrap() {
  return <Header logo={<Logo />} menuList={data.menuList} />;
}
