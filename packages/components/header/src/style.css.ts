import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const headerStyle = style({
  position: 'sticky',
  top: 0,
  zIndex: '1000',
  background: 'var(--background)',
  borderBottom: '1px solid var(--grayLv2)',
  // @ts-ignore
  'h1 svg': {
    width: 'auto',
    height: 'clamp(2.6rem, 2.8vw, 3.4rem)',
  },

  '.inner': {
    maxWidth: '119rem',
    width: 'calc(100% - 4rem)',
    height: '7rem',
    '@media screen and (max-width: 640px)': {
      height: '5.6rem',
    },
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4px',
  },
});

export const navStyle = style({
  // @ts-ignore
  '& > ul': {
    display: 'flex',

    li: {
      position: 'relative',
    },
    a: {
      height: '5.6rem',
      padding: '0 2.4rem',
      boxSizing: 'border-box',
      minWidth: 'max-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
      transition: 'all 0.3s',

      '@media (hover: hover)': {
        '&:hover': {
          color: 'var(--primary)',
        },
      },
    },

    '.arrowIcon': {
      transition: 'all 0.3s',
      marginRight: '-8px',
    },
    '.active': { rotate: '-180deg' },
  },

  '@media screen and (min-width: 641px)': {
    '@media (hover: hover)': {
      'li:hover': {
        '.depth2': {
          display: 'block',
        },
      },
      'li:focus-within': {
        '.depth2': {
          display: 'block',
        },
      },
    },
    '.depth2': {
      fontSize: '0.95em',
      display: 'none',
      position: 'absolute',
      top: '5rem',
      left: '50%',
      backgroundColor: 'var(--background)',
      border: '1px solid var(--grayLv2)',
      borderRadius: '10px',
      transform: 'translateX(-50%)',
      padding: '8px 16px',

      animation: `${fadeIn} 0.2s both`,

      a: {
        height: '4rem',
      },
    },
  },

  '@media screen and (max-width: 640px)': {
    display: 'none',

    '&.open': {
      display: 'block',
      width: '100%',
      backgroundColor: 'var(--background)',
      boxShadow: '0px 10px 8px 0px rgba(0, 0, 0, 0.1);',
      position: 'absolute',
      top: '5.6rem',
      left: 0,
      ul: {
        flexDirection: 'column',
      },

      '& > ul > li > a': {
        fontWeight: 'bold',
      },

      a: {
        justifyContent: 'space-between',
        '.arrowIcon': {
          marginRight: '0',
        },
      },

      '.depth2': {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
      },
    },
  },
});

const transformLine = {
  // @ts-ignore
  '&:nth-child(1)': {
    top: '50%',
    marginTop: ' -1px',
    transform: 'rotate(90deg)',
  },
  '&:nth-child(2)': {
    opacity: 0,
  },
  '&:nth-child(3)': {
    top: '50%',
    marginTop: ' -1px',
    transform: 'rotate(180deg)',
  },
};
export const lineBtnStyle = style({
  position: 'relative',
  display: 'block',

  width: '100%',
  height: ' 100%',

  transform: 'rotate(0)',
  transition: 'transform 0.3s',

  // @ts-ignore
  '& span': {
    display: 'inline-block',
    backgroundColor: 'var(--surface)',
    width: '100%',
    height: '2px',
    borderRadius: '2px',
    position: 'absolute',
    transition: 'all 0.3s',

    '&:nth-child(1)': {
      top: '16%',
      left: 0,
    },
    '&:nth-child(2)': {
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      opacity: 1,
    },
    '&:nth-child(3)': {
      bottom: '16%',
      left: 0,
    },
  },
});

// 모바일 전체메뉴 버튼 button
export const hamberStyle = style({
  width: '4.8rem',
  height: '4.8rem',
  overflow: 'hidden',
  padding: '1.3rem',
  transform: 'translateX(1rem)',

  // 닫힘상태: 햄버거
  // @ts-ignore
  '@media (hover: hover)': {
    '&:hover': {
      '.line': {
        transform: 'rotate(-90deg)',
        span: { ...transformLine, backgroundColor: 'var(--primary)' },
      },
    },
  },

  // 열림상태: X
  '&.open': {
    '.line': {
      transform: 'rotate(45deg)',
      span: transformLine,
    },
  },

  '@media screen and (min-width: 641px)': {
    display: 'none',
  },
});
