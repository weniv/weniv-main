import { FooterProps } from './types';
import { clsx } from 'clsx';

import { footerStyle } from './style.css';
import WenivInfo from './WenivInfo';
import ListSNS from './ListSNS';

export const Footer = (props: FooterProps) => {
  const { className, logo } = props;

  return (
    <footer className={clsx([footerStyle, className ? className : null])}>
      <div className="inner">
        <div className="footer__copy">
          <h2>
            <a href="/">{logo}</a>
          </h2>
          <p>Copyright © 2023 WENIV All Rights Reserved</p>
        </div>

        <WenivInfo className="footer__info" />
        <ListSNS className="footer__sns" />
      </div>
    </footer>
  );
};
