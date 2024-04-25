import '@weniv/components-icons/style.css';
import '@weniv/components-button/style.css';

import { Button } from '@weniv/components-button';
import { icons } from '@weniv/components-icons';

export default {
  title: 'weniv-components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      control: 'select',
      description: '사이즈 xxs/xs/sm/md/lg',
      defaultValue: { summary: 'md' },
    },
    color: {
      options: [
        'primary',
        'error',
        'warn',
        'grayLv1',
        'grayLv2',
        'grayLv3',
        'grayLv4',
        'surface',
      ],
      control: 'select',
      description: '버튼 컬러',
      defaultValue: { summary: 'primary' },
    },
    variant: {
      options: ['solid', 'outline', 'outlineSolid', 'text'],
      control: 'select',
      description: '버튼 형태 solid/outline/outlineSolid/text',
      defaultValue: { summary: 'solid' },
    },
    leftIcon: {
      options: Object.keys(icons.iconType),
      control: 'select',
      description: '왼쪽 아이콘',
      defaultValue: { summary: 'null' },
    },
    rightIcon: {
      options: Object.keys(icons.iconType),
      control: 'select',
      description: '오른쪽 아이콘',
      defaultValue: { summary: 'null' },
    },
    isDisabled: {
      control: 'boolean',
      description: 'disabled 여부',
      defaultValue: { summary: 'false' },
    },
    isLoading: {
      control: 'boolean',
      description: 'loading 여부',
      defaultValue: { summary: 'false' },
    },
  },
};

export const ButtonStory = {
  args: {
    size: 'md',
    color: 'primary',
    children: 'Button',
    variant: 'solid',
    isDisabled: false,
    isLoading: false,
    leftIcon: null,
    rightIcon: null,
  },
};
