import { style } from '@vanilla-extract/css';

const resetStyle = style({});

export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '70px',
  padding: '0 32px',
  backgroundColor: 'var(--grayLv1)',
  gap: '4px',
});
