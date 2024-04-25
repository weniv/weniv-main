import React from 'react';

import '@weniv/components-accordion/style.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@weniv/components-accordion';

export default {
  title: 'weniv-ui/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const AccordionStory = {
  args: {
    items: [
      {
        name: '프로그래밍이 처음인데 괜찮을까요? 프로그래밍이 처음인데 괜찮을까요? ',
        content:
          '네! 물론입니다. 코딩을 처음 시작하시는 분들을 위해 Python 기초부터 준비하였습니다. 다만 4일 동안 진행되는 강의인 만큼 수업이 조금 빠르게 느껴지실 수도 있는데요. 그런 분들을 위해 Python 기초 VOD 강의를 제공해 드립니다. 캠프가 끝나더라도 VOD 강의를 활용해 처음부터 차근차근 복습해 보세요!',
      },
      {
        name: '강의 시간은 어떻게 되나요?',
        content:
          '10:00~17:00(점심시간 1시간 제외) 6시간 강의가 진행되며, 17:00~18:00 1시간 자율 학습 시간이 주어집니다.',
      },
    ],
    defaultActiveItems: [],
  },
  render: ({ defaultActiveItems, items }) => (
    <Accordion
      defaultActiveItems={defaultActiveItems}
      style={{ width: '500px' }}
    >
      {items.map((item: { name: string; content: string }, index: number) => (
        <AccordionItem key={index} itemName={item.name}>
          <AccordionButton variant="faq" num={index + 1}>
            {item.name}
          </AccordionButton>
          <AccordionPanel> {item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
