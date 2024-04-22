import { HeaderProps } from './types';

import { hamberStyle, headerStyle, navStyle } from './style.css';
import { useState } from 'react';

// icon
import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

export const Header = (props: HeaderProps) => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);

  const { className, logo, menuList = [] } = props;

  return (
    <header className={`${headerStyle}${className ? ` ${className}` : ''}`}>
      <div className="inner">
        <h1>
          <a href="/">{logo}</a>
        </h1>

        <button
          type="button"
          className={`${hamberStyle}${isMenuClick ? ' open' : ''}`}
          onClick={() => setIsMenuClick((prev) => !prev)}
        >
          <span className="line">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span className="a11y-hidden">
            {isMenuClick ? '전체메뉴 닫기' : '전체메뉴 열기'}
          </span>
        </button>

        <nav className={`${navStyle}${isMenuClick ? ' open' : ''}`}>
          {menuList.length > 0 && (
            <ul>
              {menuList.map((depth1, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredMenu(index)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {depth1.subMenus ? (
                    <>
                      <a
                        href={depth1.link}
                        onFocus={() => setHoveredMenu(index)}
                      >
                        {depth1.text}
                        <Icon
                          name="down"
                          width={16}
                          color={hoveredMenu === index ? 'primary' : 'grayLv3'}
                          className={
                            hoveredMenu === index
                              ? 'arrowIcon active'
                              : 'arrowIcon'
                          }
                        />
                      </a>

                      {hoveredMenu === index && (
                        <ul className="depth2">
                          {depth1.subMenus.map((depth2, index) => (
                            <a key={index} href={depth2.link}>
                              {depth2.text}
                            </a>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={depth1.link}> {depth1.text}</a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
