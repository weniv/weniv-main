import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const lineStyle = {
  backgroundColor: 'var(--primary)',
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
    '.depth2': {
      position: 'absolute',
      top: '40px',
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
      top: '7rem',
      left: 0,
      ul: {
        flexDirection: 'column',
      },

      a: {
        justifyContent: 'space-between',
        '.arrowIcon': {
          marginRight: '0',
        },
      },
    },
  },
});

export const headerStyle = style({
  position: 'relative',
  zIndex: '1000',
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
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4px',
  },
});

export const hamberStyle = style({
  width: '4.8rem',
  height: '4.8rem',
  overflow: 'hidden',
  padding: '1.2rem',
  transform: 'translateX(1rem)',

  // 닫힘상태: 햄버거
  // @ts-ignore
  '.line': {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: ' 100%',
    transform: 'rotate(0)',
    transition: 'transform 0.3s',

    span: {
      display: 'inline-block',
      backgroundColor: 'var(--surface)',
      width: '100%',
      height: '2px',
      borderRadius: '2px',
      position: 'absolute',
      transition: 'all 0.3s',

      '&:nth-child(1)': {
        top: '15%',
        left: 0,
      },
      '&:nth-child(2)': {
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        opacity: 1,
      },
      '&:nth-child(3)': {
        bottom: '15%',
        left: 0,
      },
    },
  },
  '@media (hover: hover)': {
    '&:hover': {
      '.line': {
        transform: 'rotate(-90deg)',
        span: lineStyle,
      },
    },
  },

  // 열림상태: X
  '&.open': {
    '.line': {
      transform: 'rotate(45deg)',
      span: lineStyle,
    },
  },

  '@media screen and (min-width: 641px)': {
    display: 'none',
  },
});
