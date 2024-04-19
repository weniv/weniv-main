import { style } from '@vanilla-extract/css';

const resetStyle = style({});

export const headerStyle = style({
  position: 'relative',
  zIndex: '1000',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '70px',
  padding: '0 32px',

  gap: '4px',
  borderBottom: '1px solid var(--grayLv2)',
});
