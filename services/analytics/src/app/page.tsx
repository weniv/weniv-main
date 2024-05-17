'use client';

import { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import DoughnutSections from '../components/DoughnutSections';
import Section from '../components/Section';
import Period from '../components/Period';

const values = [
  {
    label: '위니북스',
    data: [
      8, 2, 17, 14, 13, 18, 8, 3, 7, 21, 22, 16, 15, 2, 2, 3, 25, 19, 9, 72, 11,
      4, 8, 14, 36, 32, 16, 12, 7, 6,
    ],
    borderColor: '#60a5fa',
    backgroundColor: '#60a5fa',
    // borderDash: [4, 3],
  },
  {
    label: '위니브월드',
    data: [
      2, 1, 3, 6, 8, 5, 1, 2, 0, 4, 9, 5, 2, 1, 6, 1, 0, 5, 0, 6, 7, 2, 0, 2, 6,
      2, 8, 4, 1, 0,
    ],
    borderColor: '#2dd4bf',
    backgroundColor: '#2dd4bf',
  },
  {
    label: '위니브 SQL',
    data: [
      1, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 58, 49,
      26, 32, 15, 7, 2, 6,
    ],
    borderColor: '#6366f1',
    backgroundColor: '#6366f1',
    // borderDash: [4, 2, 1, 2],
  },
];

const PieData = {
  Device: {
    labels: ['PC', 'Moblie'],
    datasets: [
      {
        data: [111, 31],
        backgroundColor: ['#60a5fa', '#2dd4bf'],
        borderWidth: 1,
      },
    ],
  },

  OS: {
    labels: ['Window', 'Mac OS X', 'Android', 'Other'],
    datasets: [
      {
        data: [70, 41, 31, 2],
        backgroundColor: ['#60a5fa', '#2dd4bf', '#6366f1', '#facc15'],
        borderWidth: 1,
      },
    ],
  },
  Browser: {
    labels: ['chrome', 'Safari', 'Whale', 'Bot'],
    datasets: [
      {
        data: [101, 9, 1, 34],
        backgroundColor: ['#60a5fa', '#2dd4bf', '#6366f1', '#facc15'],
        borderWidth: 1,
      },
    ],
  },
};
export default function Home() {
  return (
    <main className="px-20 pb-20 pt-12">
      <div className="flex gap-4 ">
        <Section>
          <h3>DAU(Daily Active Users)</h3>
          <p>Today: 000명 / 일주일 평균 000명</p>
        </Section>
        <Section>
          <h3>WAU(Weekly Active Users)</h3>
          <p>Todya: 000명 / 일주일 평균 000명</p>
        </Section>
      </div>

      <Section className="mt-10">
        <h3>접속자 수</h3>
        <LineChart values={values} />
      </Section>

      {/* <div className="grid grid-cols-2 gap-16">
        <TopService />
      </div> */}
      <DoughnutSections data={PieData} />
    </main>
  );
}
