import { icons } from './';

export type IconProps = {
  width?: number | string;
  height?: number | string;
  name: keyof typeof icons.iconType;
  color?: string;
} & React.SVGAttributes<SVGElement>;