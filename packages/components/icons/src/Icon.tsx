import * as React from 'react';
import { IconProps } from './types';

import { icons } from '.';

import './Icon.css';

const Icon = (props: IconProps, ref: React.Ref<HTMLSpanElement>) => {
  const {
    width = '3.2rem',
    height = '3.2rem',
    name,
    color,
    className,
    style,
  } = props;

  return (
    <span
      ref={ref}
      className="abc"
      style={{
        width: width,
        height: height,
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
