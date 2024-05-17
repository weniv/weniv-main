import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function handleHover(evt: any, item: any, legend: any) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color: string, index: number, colors: string[]) => {
      colors[index] =
        index === item.index || color.length === 9 ? color : color + '4D';
    },
  );
  legend.chart.update();
}

function handleLeave(evt: any, item: any, legend: any) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color: string, index: number, colors: string[]) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    },
  );
  legend.chart.update();
}

const options = {
  responsive: true,

  plugins: {
    title: {
      display: false,
    },
    legend: {
      position: 'bottom' as const,

      onHover: handleHover,
      onLeave: handleLeave,
      labels: {
        boxWidth: 12,
        boxHeight: 12,
      },
    },
  },
};
export default function DoughnutChart({ data }: { data: any }) {
  return <Doughnut data={data} options={options} />;
}
