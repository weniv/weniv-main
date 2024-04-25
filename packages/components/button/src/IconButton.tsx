import * as React from 'react';

import { IconButtonProps } from './types';
import { Icon } from '@weniv/components-icons';
import {
  iconButtonstyle,
  variant_bgColor,
  variant_bgColor_h,
  variant_bgColor_a,
  variant_color,
  variant_color_h,
  loadingStyle,
} from './style.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';

const toCssCasting = (str: string) => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

export const IconButton = (props: IconButtonProps) => {
  const {
    as = 'button',
    href,
    width = '3.6rem',
    height,
    variant = 'outline',
    isDisabled,
    name = 'home',
    style,
    color = 'primary',
    isLoading,
    ...rest
  } = props;
  const rgb = `var(--rgb-${toCssCasting(color)})`;

  let iconColor = color && `rgba(${rgb}, 1)`;
  let iconColor_h = iconColor;
  let bgColor = color && `var(--color-background)`;
  let bgColor_h = color && `rgba(${rgb}, 0.07)`;
  let bgColor_a = color && `rgba(${rgb}, 0.1)`;

  if (variant === 'solid') {
    iconColor = `var(--${toCssCasting(color)}-text)`;
    iconColor_h = `var(--${toCssCasting(color)}-text)`;
    bgColor = `var(--${toCssCasting(color)}-default)`;
    bgColor_h = `var(--${toCssCasting(color)}-lighten)`;
    bgColor_a = `var(--${toCssCasting(color)}-darken)`;
  }

  if (variant === 'outlineSolid') {
    iconColor_h = `var(--${toCssCasting(color)}-text)`;
    bgColor_h = `var(--${toCssCasting(color)}-default)`;
    bgColor_a = `var(--${toCssCasting(color)}-darken)`;
  }

  let widthUnit;
  let heightUnit;

  const convertToPx = (value: number | string) =>
    typeof value === 'string' && value?.match(/[^0-9]/) ? value : `${value}px`;

  if (width) {
    widthUnit = convertToPx(width);
  }

  if (height) {
    heightUnit = convertToPx(height);
  } else {
    heightUnit = widthUnit;
  }

  return React.createElement(
    as,
    {
      ...rest,
      href: as === 'a' && href,
      target:
        as === 'button' ? null : href?.includes('http') ? '_blank' : '_self',
      disabled: as === 'button' && isDisabled,
      className: iconButtonstyle({ variant }),
      style: {
        ...assignInlineVars({
          [variant_bgColor]: bgColor,
          [variant_bgColor_h]: bgColor_h,
          [variant_bgColor_a]: bgColor_a,
          [variant_color]: iconColor,
          [variant_color_h]: iconColor_h,
        }),
        width: widthUnit,
        height: heightUnit,
        ...style,
      },
    },

    <>
      {isLoading && <span className={clsx(['loading', loadingStyle])} />}
      <Icon name={name} color={color} />
    </>,
  );
};
