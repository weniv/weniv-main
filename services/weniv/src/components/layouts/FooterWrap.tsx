'use client';

import '@weniv/components-footer/style.css';
import { Footer } from '@weniv/components-footer';
import Logo from './Logo';

export default function FooterWrap() {
  return <Footer logo={<Logo />} />;
}
