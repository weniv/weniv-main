import { style } from '@vanilla-extract/css';

const resetStyle = style({});

export const formStyle = style({
  backgroundColor: 'var(--grayLv1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4px',
  padding: '0 16px',
  borderRadius: '12px',
  boxSizing: 'border-box',
  transition: 'all 0.2s',
  // @ts-ignore
  '&:focus-within': {
    outline: '2px solid var(--primary)',
  },
});
export const inputStyle = style({
  maxWidth: 'calc(100% - 4px - 24px)',
  backgroundColor: 'transparent',
  height: '50px',
  flexGrow: 1,
  flexShrink: 0,
  outline: 'none',
  // @ts-ignore
  '&:placeholder': {
    color: 'var(--grayLv2)',
  },
});

export const btnStyle = style({
  width: '24px',
  height: '24px',
  flexShrink: 0,
});
