import { IconProps } from './types';
import { clsx } from 'clsx';
import { icons } from '.';
import { wrapStyle, svgStyle } from './style.css';

export const Icon = (props: IconProps) => {
  const { width, height, name, color = 'surface', className } = props;

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
      className={clsx([wrapStyle, className ? className : null])}
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
        className={svgStyle}
      >
        {icons.iconType[name].path.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </svg>
    </span>
  );
};
