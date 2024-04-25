import React from 'react';
import PropTypes from 'prop-types';

import '@weniv/components-header/style.css';
import { Header } from '@weniv/components-header';

import Logo from './Logo';

const menuList = [];

export default {
  title: 'weniv-components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    width: {
      control: 'text',
      description: '너비',
      defaultValue: { summary: '119rem' },
    },
    menuList: {
      control: 'text',
      description: '너비',
      defaultValue: [
        {
          text: 'depth1-1',
          link: '#',
          subMenus: [
            { text: 'depth2-1', link: '#' },
            { text: 'depth2-2', link: '#' },
            { text: 'depth2-3', link: '#' },
          ],
        },
        {
          text: 'depth1-2',
          link: '#',
        },
      ],
    },
  },
};

export const HeaderStory = {
  render: () => <Header logo={<Logo />} menuList={menuList} />,
};
