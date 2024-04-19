import { HeaderProps } from './types';

import { headerStyle } from './style.css';

export const Header = (props: HeaderProps) => {
  const { className, children, logo } = props;

  return (
    <header className={`${headerStyle}${className ? ` ${className}` : ''}`}>
      <h1>
        <a href="/">{logo}</a>
      </h1>

      {children}
    </header>
  );
};
