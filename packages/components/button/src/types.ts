import { colors } from '@weniv/weniv-css';
import { icons } from '@weniv/components-icons';

export type ButtonProps = {
  as?: 'a';
  href?: string;
  sns?: string;
  width?: string;
  height?: string;
  color?: keyof typeof colors;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: keyof typeof icons.iconType;
  rightIcon?: keyof typeof icons.iconType;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'outlineSolid' | 'text';
} & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export type IconButtonProps = {
  as?: 'a';
  href?: string;
  width?: string;
  height?: string;
  name?: keyof typeof icons.iconType;
  fill?: keyof typeof color;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'outlineSolid' | 'icon';
} & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
