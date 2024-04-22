import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
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

  'nav > ul': {
    display: 'flex',

    li: {
      position: 'relative',
    },
    a: {
      padding: '0.8rem 1.2rem',
      minWidth: '10rem',
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

  '@media screen and (max-width: 640px)': {
    nav: {
      display: 'none',
      'nav > ul': {
        flexDirection: 'column',
      },
    },
  },
});
