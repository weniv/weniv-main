import * as React from 'react';
import { useState } from 'react';

import { clsx } from 'clsx';

import { AccordionProps } from './types';
import AccordionContext from './AccordionContext';
import { accordionStyle } from './style.css';

export const Accordion = (props: AccordionProps) => {
  const { defaultActiveItems = [], children, className, ...rest } = props;
  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        setActiveItem: handleSetActiveItem,
      }}
    >
      <div {...rest} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
