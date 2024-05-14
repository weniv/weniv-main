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

const DATA_COUNT = 7;
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
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  borderColor: '#fff',
  pointStyle: false,
  tension: 0.3,
  borderWidth: 3,
};

export default function LineChartMin({
  text,
  values,
}: {
  text: string;
  values: any;
}) {
  const data = {
    labels,
    datasets: [{ label: text, data: values }],
  };
  return <Line options={options} data={data} />;
}
