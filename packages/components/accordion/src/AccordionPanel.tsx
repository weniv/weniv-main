import { useState, useRef, useEffect } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';

import { AccordionPanelProps } from './types';
import { accordionPanelStyle, panelHeight } from './style.css';
import { useAccordionContext } from './AccordionContext';

export const AccordionPanel = (props: AccordionPanelProps) => {
  const { itemName = '', children, className, style, ...rest } = props;
  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);
  const [currentPanelHeight, setCurrentPanelHeight] = useState<string>();
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!innerRef.current) return;
      setCurrentPanelHeight(`${innerRef.current.offsetHeight}px`);
    };

    handleResize();

    if (!innerRef.current) return;

    if (isActive) {
      const observer = new MutationObserver(handleResize);

      observer.observe(innerRef.current, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    } else {
      setCurrentPanelHeight('0');
    }
  }, [isActive, activeItems]);

  return (
    <div
      {...rest}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        ...assignInlineVars({
          [panelHeight]:
            currentPanelHeight ?? `${innerRef.current?.offsetHeight}px`,
        }),
        ...style,
      }}
    >
      <div data-name="panel-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
};
