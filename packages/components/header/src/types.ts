import * as React from 'react';

export type HeaderProps = {
  menuList?: MenuInterface[];
  className?: string;
  children?: React.ReactNode;
  logo?: React.ReactNode;
};

export interface MenuInterface {
  text: string;
  link: string;
  subMenus?: MenuInterface[];
}
