import * as React from 'react';
import { IconProps } from './types';

import './style.css';
import { icons } from '.';

const Icon = (props: IconProps, ref: React.Ref<HTMLSpanElement>) => {
  const { width, height, name, color, className } = props;

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

  return (
    <span
      ref={ref}
      className={`icon ${className}`}
      style={{
        width: widthUnit,
        height: heightUnit,
      }}
    >
      <svg
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${icons.iconType[name].width} ${icons.iconType[name].height}`}
        fill={color}
      >
        {icons.iconType[name].path.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </svg>
    </span>
  );
};
const _Icon = React.forwardRef(Icon);
export { _Icon as Icon };
