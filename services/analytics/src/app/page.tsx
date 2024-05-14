'use client';

import TopService from '../components/TopService';
import LineChart from '../components/LineChart';

const values = [
  {
    label: '위니북스',
    data: [
      8, 2, 17, 14, 13, 18, 8, 3, 7, 21, 22, 16, 15, 2, 2, 3, 25, 19, 9, 72, 11,
      4, 8, 14, 36, 32, 16, 12, 7, 6,
    ],
    borderColor: '#a0cb89',
    backgroundColor: 'rgba(160, 203, 137, 0.6)',
    borderDash: [4, 3],
  },
  {
    label: '위니브월드',
    data: [
      2, 1, 3, 6, 8, 5, 1, 2, 0, 4, 9, 5, 2, 1, 6, 1, 0, 5, 0, 6, 7, 2, 0, 2, 6,
      2, 8, 4, 1, 0,
    ],
    borderColor: '#a1c1dc',
    backgroundColor: 'rgba(161, 193, 220, 0.6)',
  },
  {
    label: '위니브로그',
    data: [
      1, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 1, 58, 49,
      26, 32, 15, 7, 2, 6,
    ],
    borderColor: '#ffb98a',
    backgroundColor: 'rgb(255, 185, 138, 0.6)',
    borderDash: [4, 2, 1, 2],
  },
];

export default function Home() {
  return (
    <main className="max-w-[1600px] w-full px-16 mx-auto">
      <LineChart values={values} />
      <div className="grid grid-cols-2 gap-16">
        <TopService />
      </div>
    </main>
  );
}
