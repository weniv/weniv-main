import { style } from '@vanilla-extract/css';

const resetStyle = style({});

export const wrapStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const inputStyle = style({
  width: '24px',
  height: '24px',
  appearance: 'none',

  // @ts-ignore
  '&:focus': {
    outlineColor: 'var(--primary)',
    outlineOffset: '1px',
  },
  '&:checked ~ label': {
    fontWeight: '600',
    color: 'var(--primary)',
  },
  '& ~ label': {
    transition: 'all 0.3s',
    cursor: 'pointer',
    selet: 'none',

    '&:hover': {
      color: 'var(--primary)',
    },
  },
});

export const iconStyle = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
});
