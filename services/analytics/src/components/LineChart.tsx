'use client';

import { format, subDays, addDays } from 'date-fns';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  elements,
  scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DATA_COUNT = 30;
const labels: string[] = [];
const today = new Date();
const startDate = subDays(today, DATA_COUNT);
for (let i = 0; i < DATA_COUNT; ++i) {
  const currentDate = addDays(startDate, i);
  labels.push(format(currentDate, 'M.d'));
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 12,
        boxHeight: 12,
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  tension: 0.3,
  borderWidth: 2,
  elements: {
    point: {
      pointStyle: 'circle',
      borderWidth: 2,
      radius: 2,
      hoverBorderWidth: 4,
      hoverRadius: 4,
    },
  },
};

export default function LineChart({ values }: { values: any }) {
  const data = {
    labels,
    datasets: values,
  };
  return <Line options={options} data={data} />;
}
