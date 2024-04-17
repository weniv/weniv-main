import { icons } from './';

export type IconProps = {
  width?: number | string;
  height?: number | string;
  name: keyof typeof icons.iconType;
  // color?: keyof typeof vars.colors.light.color | string;
} & React.SVGAttributes<SVGElement>;
