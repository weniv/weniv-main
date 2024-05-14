import { style } from '@vanilla-extract/css';

const resetStyle = style({});
export const gridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '24px',
});

export const articleStyle = style({
  position: 'relative',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '12px',

  backgroundColor: 'var(--background)',

  boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.04)',
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '50px',
  padding: '0 18px 0 28px',
});
export const imageStyle = style({
  aspectRatio: '324/208',

  // @ts-ignore
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const contentWrap = style({
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flexGrow: 1,
});

export const titleStyle = style({
  fontWeight: 600,
  color: 'var(--surface)',
  fontSize: '18px',

  flexGrow: 1,
});

export const teacherStyle = style({
  color: 'var(--grayLv4)',
  fontSize: '16px',
});
export const dateStyle = style({
  color: 'var(--grayLv3)',
  fontSize: '16px',
});
