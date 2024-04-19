import { style } from '@vanilla-extract/css';

export const wrapStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '32px',
  maxWidth: '100%',
  aspectRatio: '1/1',
  verticalAlign: 'middle',
});
export const svgStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
