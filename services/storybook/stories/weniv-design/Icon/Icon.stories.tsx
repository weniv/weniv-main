import '@weniv/components-icons/style.css';
import { Icon, icons } from '@weniv/components-icons';
import { colors } from '@weniv/weniv-css';

export default {
  title: 'weniv-design/Icon',
  component: Icon,
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
        presetColors: Object.values(colors),
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
