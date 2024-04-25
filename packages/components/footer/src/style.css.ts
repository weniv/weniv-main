import { style } from '@vanilla-extract/css';

export const footerStyle = style({
  borderTop: '1px solid var(--grayLv2)',
  backgroundColor: 'var(--grayLv1)',
  color: 'var(--grayLv3A11y)',
  padding: 'clamp(4rem, 5vw, 6rem) 0',
  fontSize: '0.875em',
  // @ts-ignore
  '.inner, .footer__copy': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  },
  '.inner': {
    flexWrap: 'wrap',
    maxWidth: '119rem',
    width: 'calc(100% - 4rem)',
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  '.footer__copy': {
    flexBasis: '100%',

    'h2 svg': {
      width: 'auto',
      height: 'clamp(2.6rem, 2.8vw, 3.4rem)',
    },
    'svg path': {
      fill: 'var(--grayLv3)',
    },
  },
  '.footer__info': {
    flexGrow: 1,
  },
  '.footer__sns': {
    flexShrink: 0,
  },
  '@media screen and (max-width: 640px)': {
    '.inner, .footer__copy': {
      flexDirection: 'column',
    },
    '.footer__info': {
      order: 1,
    },
  },
});

export const infoStyle = style({
  textAlign: 'center',
  // @ts-ignore
  '.info__btn': {
    display: 'none',

    '@media screen and (max-width: 640px)': {
      fontWeight: 'bold',

      display: 'inline-flex',
      gap: '0.4rem',
      alignItems: 'center',
      justifyContent: 'center',
      height: '3.2rem',
      padding: '0 1.6rem',

      '&, .icon svg path': {
        transition: 'all 0.3s',
      },
      '@media (hover: hover)': {
        '&:hover': {
          color: 'var(--primary)',
          '.icon svg path': {
            fill: 'var(--primary)',
          },
        },
      },

      '.icon': {
        marginRight: '-0.4rem',
        transition: 'all 0.3s',
      },
      '&.on': {
        '.icon': {
          rotate: '-180deg',
        },
      },
    },
  },
  '.info__ul': {
    display: 'flex',
    flexWrap: 'wrap',
    '@media screen and (max-width: 640px)': {
      justifyContent: 'center',
      display: 'none',
      '&.on': {
        display: 'flex',
      },
    },
    li: {
      address: {
        fontStyle: 'normal',
        display: 'inline',
      },
    },
  },
});

export const liStyle = style({
  ':after': {
    content: '',
    display: 'inline-block',
    width: '1px',
    height: '0.8rem',
    backgroundColor: ' var(--grayLv3)',
    margin: '0 0.5em',
    verticalAlign: 'middle',
  },
});
export const snsStyle = style({
  display: 'inline-flex',
  gap: '0.4rem',

  // @ts-ignore
  a: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--grayLv2)',
    borderRadius: '0.8rem',
    width: '4rem',
    height: '4rem',
    boxSize: 'border-box',

    '.sns-icon': {
      width: '60%',
    },

    '&, .sns-icon path': {
      transition: 'all 0.3s',
    },

    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: 'var(--activation)',
        '.sns-icon path': {
          fill: 'var(--primary)',
        },
      },
    },
  },
});
