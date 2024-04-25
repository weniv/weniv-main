import React from 'react';

import '@weniv/components-card/style.css';
import { CardList } from '@weniv/components-card';

export default {
  title: 'weniv-components/Card',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const CardItemStory = {
  args: {
    items: {
      brand: '제주코딩베이스캠프',
      image:
        'https://main.weniv.co.kr/images/learns/y-python-algorithm-basic100.jpeg',
      title: 'Python 알고리즘 베이직 100',
      description: null,
      price: 0,
      teacher: ['이호준'],
      date: '2024.02.28',
      time: null,

      difficulty: '입문',
      platform: ['유튜브'],
      link: {
        youtube:
          'https://www.youtube.com/playlist?list=PLkfUwwo13dlU7tTsyR8cYP7HU1ukmB7mm',
      },

      category: '기타',
      tag: [],
      tech: ['python'],
      roadmap: [],
    },
  },
  render: ({ items }) => <CardList data={items} />,
};

export const CardStory = {
  args: {
    items: [
      {
        brand: '제주코딩베이스캠프',
        image:
          'https://main.weniv.co.kr/images/learns/y-python-algorithm-basic100.jpeg',
        title: 'Python 알고리즘 베이직 100',
        description: null,
        price: 0,
        teacher: ['이호준'],
        date: '2024.02.28',
        time: null,

        difficulty: '입문',
        platform: ['유튜브'],
        link: {
          youtube:
            'https://www.youtube.com/playlist?list=PLkfUwwo13dlU7tTsyR8cYP7HU1ukmB7mm',
        },

        category: '기타',
        tag: [],
        tech: ['python'],
        roadmap: [],
      },

      {
        brand: 'The Oreum',
        image: 'https://main.weniv.co.kr/images/learns/o-woopy-notion.png',
        title: '코드없이 우피x노션으로 초간단 웹사이트 만들기',
        description:
          '개발자 없이, 코딩 없이 노션과 우피만으로 퀄리티 있는 웹사이트를 만들 수 있는 강의입니다.',
        price: 0,
        teacher: ['김민승'],
        date: '2023.06.19',
        time: '44분',

        difficulty: '입문',
        platform: ['인프런', '유튜브'],
        link: {
          inflearn: null,
          youtube: null,
        },

        category: '기타',
        tag: [],
        tech: ['notion'],
        roadmap: [],
      },
    ],
  },
  render: ({ items }) => <CardList data={items} />,
};
