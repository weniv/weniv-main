import * as React from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import { clsx } from 'clsx';

import { AccordionItemProps } from './types';
import { accordionItemStyle } from './style.css';

export const AccordionItem = (props: AccordionItemProps) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};
