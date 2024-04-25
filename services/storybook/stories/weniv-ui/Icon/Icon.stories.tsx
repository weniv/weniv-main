import '@weniv/components-icons/style.css';
import { Icon as _Icon, icons } from '@weniv/components-icons';

export default {
  title: 'weniv-ui/Icon',
  component: _Icon,
  parameters: { layout: 'centered' },
  argTypes: {
    name: {
      options: Object.keys(icons.iconType),
      control: 'select',
      description: '위니브 아이콘(필수값)',
    },
    color: {
      control: {
        type: 'color',
        // presetColors: Object.values(vars.colors.light.color),
      },
      description: '위니브 테마 컬러',
      defaultValue: { summary: 'primary' },
    },
    width: {
      control: 'text',
      description: '너비',
      defaultValue: { summary: '3.6rem' },
    },
    height: {
      control: 'text',
      description: '높이',
      defaultValue: {
        summary: '3.6rem / width',
        detail: 'width 값 작성 시 width 값과 동일',
      },
    },
  },
};

export const iconStory = {
  args: { name: 'alert', color: 'primary' },
};
