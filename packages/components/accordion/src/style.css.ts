import { createVar, style } from '@vanilla-extract/css';

const resetStyle = style({
  margin: 0,
  padding: 0,
  border: 0,
  background: 'none',
});

export const accordionStyle = style([
  resetStyle,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    color: 'var(--surface)',
  },
]);

export const accordionItemStyle = style([
  resetStyle,
  {
    alignItems: 'flex-start',
    borderRadius: '1.6rem',
    border: '1px solid var(--grayLv2)',
    backgroundColor: 'var(--background)',
    padding: '1.2rem',
  },
]);

export const AccordionButtonStyle = style([
  resetStyle,
  {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1em',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '1.2rem',
    textAlign: 'left',
    gap: '2.4rem',

    // @ts-ignore

    '& .title': {
      display: 'flex',
      flexGrow: 1,
      gap: '1em',
      alignItems: 'center',
    },
    '&:hover .icon': {
      backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
      borderColor: 'rgba(var(--primary-rgb), 0.5)',

      '& svg': {
        fill: 'var(--primary)',
      },
    },
  },
]);

export const strongStyle = style({
  color: 'var(--primary)',
  fontSize: '1.3em',
  fontWeight: 600,
});
export const arrowStyle = style({
  display: 'flex',
  border: '1px solid var(--grayLv2)',
  width: '3.2rem',
  height: '3.2rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  flexShrink: 0,
  transition: 'rotate 0.3s,  background-color 0.3s,  border-color 0.3s',

  // @ts-ignore
  '& svg': {
    width: '1em',
    height: 'auto',
  },
  '&.open': {
    rotate: '-540deg',
  },
});

export const panelHeight = createVar();
export const accordionPanelStyle = style([
  resetStyle,
  {
    fontSize: '1em',
    width: '100%',
    height: panelHeight,
    overflow: 'hidden',
    lineHeight: '175%',
    transition: 'height 0.3s',

    // @ts-ignore
    "& > div[data-name='panel-inner']": {
      padding: '1.2rem',
    },
  },
]);
