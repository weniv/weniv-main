import React from 'react';

import '@weniv/components-card/style.css';
import { CardList } from '@weniv/components-card';

import img1 from './o-snack-python.png';
import img2 from './j-basecamp-django.png';

export default {
  title: 'weniv-components/Card',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const CardStory = {
  args: {
    items: [
      {
        brand: 'The Oreum',
        image: img1,
        title: '중급자를 위한 1 minute, 스낵 파이썬',
        description:
          '지하철에서, 버스에서, 공항에서! 잠시 틈 날 때 짧게 보는 중급자를 위한 스낵! 내가 잘 몰랐던 2%를 채워줄 Python 코드 스니펫!',
        price: 22000,
        teacher: ['이호준'],
        date: '2021.06.17',
        time: '3시간 19분',

        difficulty: '중급이상',
        platform: ['인프런', '네이버TV'],
        link: {
          inflearn:
            'https://www.inflearn.com/course/%EC%A4%91%EA%B8%89%EC%9E%90-%EC%8A%A4%EB%82%B5-%ED%8C%8C%EC%9D%B4%EC%8D%AC',
          naver:
            'https://tv.naver.com/jejucodingbasecamp?tab=playlist&playlistNo=723757',
        },
        category: 'Back-End',
        tag: [],
        tech: ['python'],
        roadmap: [],
      },
      {
        brand: '제주코딩베이스캠프',
        image: img2,
        title: 'Django 베이스캠프',
        description:
          'Django 베이스 캠프는 초보자부터 중급자까지 Django 웹 프레임워크의 핵심을 체계적으로 학습할 수 있는 강의입니다. 프로젝트 중심의 실전 수업으로 빠르게 웹 애플리케이션을 구축하는 능력을 키울 수 있습니다.',
        price: 44000,
        teacher: ['이호준'],
        date: '2024.03.20',
        time: '6시간',

        difficulty: '초급',
        platform: ['인프런'],
        link: {
          inflearn:
            'https://www.inflearn.com/course/django-%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%BA%A0%ED%94%84',
          youtube: null,
        },
        category: '개발',
        tag: [],
        tech: ['django'],
        roadmap: [],
      },
    ],
    defaultActiveItems: [],
  },
  render: ({ items }) => <CardList data={items} />,
};
