import * as React from 'react';

export interface HeaderProps {
  menuList?: MenuInterface[];
  className?: string;
  children?: React.ReactNode;
  logo?: React.ReactNode;
}

export interface MenuInterface {
  text: string;
  link: string;
  subMenus?: MenuInterface[];
}
