import { IconProps } from './types';

import styles from './Icon.module.css';
import { icons } from '.';

export const Icon = (props: IconProps) => {
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
      className={`${styles.icon}${className ? ` ${className}` : ''}`}
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
        fill={`var(--${color})`}
      >
        {icons.iconType[name].path.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </svg>
    </span>
  );
};
