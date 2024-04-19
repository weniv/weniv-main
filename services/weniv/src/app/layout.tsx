import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/src/styles/globals.css';
import '@/src/styles/layouts.css';
import { METADATA } from '../constants/metadata';

import Footer from '@/src/components/layouts/Footer';
import HeaderWrap from '../components/layouts/HeaderWrap';

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
      <body className={`flex flex-col min-h-screen ${pretendard.className}`}>
        <HeaderWrap />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
