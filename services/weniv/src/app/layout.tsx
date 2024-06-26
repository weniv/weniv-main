import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@styles/globals.css';
import '@styles/layouts.css';
import { METADATA } from '../constants/metadata';

import HeaderWrap from '../components/layouts/HeaderWrap';
import FooterWrap from '../components/layouts/FooterWrap';

const pretendard = localFont({
  src: [
    {
      path: './font/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },

    {
      path: './font/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  metadataBase: new URL(METADATA.LINK),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    url: METADATA.LINK,
    type: 'website',
    siteName: METADATA.TITLE,
    images: [METADATA.OGIMG],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    images: [METADATA.OGIMG],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={pretendard.className}>
        <HeaderWrap />
        <div className="flex-grow">{children}</div>
        <FooterWrap />
      </body>
    </html>
  );
}
