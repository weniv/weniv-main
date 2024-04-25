import { recipe } from '@vanilla-extract/recipes';
import { createVar, keyframes, style } from '@vanilla-extract/css';

export const variant_color = createVar();
export const variant_color_h = createVar();

export const variant_bgColor = createVar();
export const variant_bgColor_h = createVar();
export const variant_bgColor_a = createVar();

// 버튼
export const buttonStyle = recipe({
  base: {
    font: 'inherit',
    position: 'relative',
    padding: '0 1.5em',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5em',
    border: '1px solid transparent',
    borderRadius: '0.75em',
    background: 'none',
    fontWeight: 400,
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',

    // @ts-ignore
    '&, & span': {
      color: variant_color,
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
    },

    '& .left': { marginLeft: '-0.3em' },
    '& .right': { marginRight: '-0.3em' },

    '& svg': {
      fill: 'currentColor',
    },
    '&[disabled]': {
      backgroundColor: 'var(--grayLv2)',
      cursor: 'not-allowed',
      border: 0,
      '&, & span': {
        color: 'var(--grayLv3)',
      },
    },

    // hover
    '@media (hover: hover)': {
      '&:hover:not([disabled])': {
        color: variant_color_h,
        backgroundColor: variant_bgColor_h,
      },
    },

    '&:active:not([disabled])': {
      backgroundColor: variant_bgColor_a,
    },
  },
  variants: {
    size: {
      xxs: {
        height: '2.4rem',
        padding: '0 0.5em 0 0.6em',
        borderRadius: '0.5em',
        // @ts-ignore
        '&, & span': {
          fontSize: '1.2rem',
        },
      },
      xs: {
        height: '3.2rem',
        // @ts-ignore
        '&, & span': {
          fontSize: '1.2rem',
        },
      },
      sm: {
        height: '3.6rem',
        // @ts-ignore
        '&, & span': {
          fontSize: '1.4rem',
        },
      },
      md: {
        height: '4.2rem',
        // @ts-ignore
        '&, & span': {
          fontSize: '1.6rem',
        },
      },
      lg: {
        height: '5.4rem',
        // @ts-ignore
        '&, & span': {
          fontSize: '1.8rem',
        },
      },
    },
    variant: {
      solid: {
        backgroundColor: variant_bgColor,
      },
      outline: {
        borderColor: variant_bgColor,
        fontWeight: 500,
      },
      outlineSolid: {
        borderColor: variant_bgColor,
        fontWeight: 500,
        // @ts-ignore
        '&, & span': {
          color: 'var(--surface)',
        },

        '@media (hover: hover)': {
          '&:hover:not([disabled])': {
            '&, & span': {
              color: variant_color_h,
            },
          },
        },
      },
      text: {
        // @ts-ignore
        '&, & span': {
          color: variant_bgColor,
          textDecoration: 'underline',
        },
      },
    },
  },
});

// 버튼 상태: 로딩중
const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loadingStyle = style({
  position: 'absolute',
  animation: `${spinKeyframes} 0.45s linear infinite`,
  display: 'inline-block',
  border: '0.2em solid transparent',
  borderTopColor: 'currentColor',
  borderRightColor: 'currentColor',
  borderRadius: '50%',
  width: '1em',
  height: '1em',
  // @ts-ignore
  '& ~ *': {
    opacity: 0,
  },
});

// sns 아이콘
export const snsIconStyle = style({
  position: 'absolute',
  left: '1.2rem',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '1.7em',
  aspectRatio: '1/1',
  // @ts-ignore
  '& + span': {
    paddingLeft: '1em',
  },
  '&.github path': {
    fill: 'var(--surface)',
  },
});

export const iconButtonstyle = recipe({
  base: {
    padding: 0,
    margin: 0,
    background: variant_bgColor,
    border: 0,
    borderRadius: '0.75em',

    position: 'relative',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',

    color: variant_color,
    // @ts-ignore
    '&:not([disabled]) span:not(.loading)': {
      width: '62.5%',
      height: '62.5%',
      objectFit: 'contain',
      color: variant_color,
    },
    '&[disabled]': {
      backgroundColor: 'var(--grayLv2)',
      cursor: 'not-allowed',
      border: 0,
      color: 'var(--grayLv3)',
      '& svg': {
        fill: 'var(--grayLv3)',
      },
    },

    // hover
    '@media (hover: hover)': {
      '&:hover:not([disabled])': {
        color: variant_color_h,
        borderColor: variant_color_h,
        backgroundColor: variant_bgColor_h,
      },
    },

    '&:active:not([disabled])': {
      backgroundColor: variant_bgColor_a,
    },
  },
  variants: {
    variant: {
      solid: {
        // @ts-ignore
        '& svg': {
          fill: variant_color_h,
        },
        '@media (hover: hover)': {
          '&:hover:not([disabled])': {
            color: variant_color_h,
          },
        },
      },
      outline: {
        border: '1px solid var(--grayLv2)',
      },
      outlineSolid: {
        border: `1px solid ${variant_color}`,
        // @ts-ignore
        '@media (hover: hover)': {
          '&:hover:not([disabled])': {
            color: variant_color_h,
            borderColor: variant_color,

            '& svg': {
              fill: variant_color_h,
            },
          },
        },
      },
      icon: {},
    },
  },
});
