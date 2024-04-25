import '@weniv/components-icons/style.css';
import '@weniv/components-button/style.css';

import { IconButton } from '@weniv/components-button';
import { icons } from '@weniv/components-icons';

export default {
  title: 'weniv-components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: 'text',
      description: '너비',
      defaultValue: { summary: '3.6rem' },
    },
    height: {
      control: 'text',
      description: '높이',
      defaultValue: { summary: '3.6rem' },
    },
    name: {
      options: Object.keys(icons.iconType),
      control: 'select',
      description: '왼쪽 아이콘',
      defaultValue: { summary: 'null' },
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
      options: ['solid', 'outline', 'outlineSolid', 'icon'],
      control: 'select',
      description: '버튼 형태 solid/outline/outlineSolid/icon',
      defaultValue: { summary: 'solid' },
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

export const IconButtonStory = {
  args: {
    name: 'help',

    color: 'primary',
    variant: 'outline',
    isDisabled: false,
    isLoading: false,
  },
};
