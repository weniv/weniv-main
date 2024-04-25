import React from 'react';
import '@weniv/components-search/style.css';
import { Search } from '@weniv/components-search';

export default {
  title: 'weniv-ui/Search',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'select',
    },
    color: {
      // options: Object.keys(vars.colors.light.color),
      control: 'select',
    },
    variant: {
      options: ['outline', 'filled'],
      control: 'select',
    },
    isHiddenLabel: {
      control: 'boolean',
    },
  },
};

export const InputStory = {
  render: () => <Search label="Label" placeholder="placeholder" />,
};

export const hiddenLabel = {
  render: () => <Search label="Label" placeholder="placeholder" />,
};

export const outline = {
  render: () => (
    <Search label="Label" type="number" placeholder="placeholder" />
  ),
};

export const underline = {
  render: () => (
    <Search label="검색" type="password" placeholder="검색어를 입력하세요" />
  ),
};
