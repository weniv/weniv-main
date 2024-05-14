import { icons } from './';
import { colors } from '@weniv/weniv-css';

export type IconProps = {
  width?: number | string;
  height?: number | string;
  name: keyof typeof icons.iconType;
  color?: keyof typeof colors;
} & React.SVGAttributes<SVGElement>;
