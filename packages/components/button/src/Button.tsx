import * as React from 'react';
import { clsx } from 'clsx';

import { ButtonProps } from './types';
import { Icon } from '@weniv/components-icons';
import {
  buttonStyle,
  snsIconStyle,
  loadingStyle,
  variant_bgColor,
  variant_bgColor_h,
  variant_bgColor_a,
  variant_color,
  variant_color_h,
} from './style.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import SNSIcon from './SNSIcon';

export const Button = (props: ButtonProps) => {
  const {
    as = 'button',
    width,
    height,
    variant = 'solid',
    size = 'md',
    color = 'primary',
    leftIcon,
    rightIcon,
    isDisabled,
    isLoading,
    children,
    style,
    sns,
    href,
    ...rest
  } = props;

  const bgColor = color && `var(--${color})`;
  const textColor_h = color && `var(--${color}-text)`;

  let bgColor_h = color && `var(--${color}-lighten)`;
  let bgColor_a = color && `var(--${color}-darken)`;
  if (variant === 'outline' || variant === 'text') {
    const rgb = `var(--${color}-rgb)`;
    bgColor_h = `rgba(var(--${color}-rgb), 0.1)`;
    bgColor_a = `rgba(var(--${color}-rgb), 0.15)`;
  }

  let textColor = color && `var(--${color}-text)`;

  if (variant === 'outline' && (color === 'grayLv1' || color === 'grayLv2')) {
    textColor = color && `var(--surface)`;
  } else if (variant !== 'solid') {
    textColor = bgColor;
  }

  return React.createElement(
    as,
    {
      // ...buttonProps,
      ...rest,
      href: as === 'a' && href ? href : null,
      target:
        as === 'button' ? null : href?.includes('http') ? '_blank' : '_self',
      disabled: as === 'button' && isDisabled,
      className: clsx([
        buttonStyle({
          size,
          variant,
        }),
      ]),
      style: {
        ...assignInlineVars({
          [variant_bgColor]: bgColor,
          [variant_bgColor_h]: bgColor_h,
          [variant_bgColor_a]: bgColor_a,
          [variant_color]: textColor,
          [variant_color_h]: textColor_h,
        }),

        width: width ? width : 'auto',
        height: height && height,
        ...style,
      },
    },
    <>
      {isLoading && <span className={loadingStyle} />}
      {sns && <SNSIcon type={sns} className={snsIconStyle} />}

      {leftIcon && <Icon name={leftIcon} width="1.2em" className="left" />}

      <span>{children}</span>

      {rightIcon && <Icon name={rightIcon} width="1.2em" className="right" />}
    </>,
  );
};
