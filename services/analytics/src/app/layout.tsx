import type { Metadata } from 'next';

import './globals.css';

import Menu from '../components/Menu';
import Header from '../components/layouts/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>
        <Header />

        <Menu />
        {children}
      </body>
    </html>
  );
}
