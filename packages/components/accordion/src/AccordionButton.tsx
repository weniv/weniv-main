import * as React from 'react';
import { useCallback } from 'react';

import { clsx } from 'clsx';

import { AccordionButtonProps } from './types';
import { AccordionButtonStyle, arrowStyle, strongStyle } from './style.css';
import { useAccordionContext } from './AccordionContext';
import { Icon } from '@weniv/components-icons';

export const AccordionButton = (props: AccordionButtonProps) => {
  const {
    variant,
    className,
    itemName = '',
    onClick,
    children,
    num,
    ...rest
  } = props;
  const { activeItems, setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItem],
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx([AccordionButtonStyle, className])}
      {...rest}
    >
      <span className="title">
        {variant === 'faq' && <strong className={strongStyle}>Q{num}.</strong>}
        {children}
      </span>

      <Icon
        name="down"
        color="grayLv3"
        className={clsx([
          'icon',
          arrowStyle,
          activeItems.includes(itemName) && 'open',
        ])}
      />
    </button>
  );
};
