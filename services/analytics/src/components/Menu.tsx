import Link from 'next/link';
import LineChartMin from './LineChartMin';

export default function Menu() {
  const data1 = [14, 36, 32, 16, 12, 7, 6];
  const data2 = [2, 6, 2, 8, 4, 1, 0];
  const data3 = [49, 26, 32, 15, 7, 2, 6];
  const data4 = [15, 24, 2, 15, 7, 2, 6];
  const data5 = [8, 10, 16, 15, 24, 20, 40];

  return (
    <div className="max-w-[1600px] w-full px-16 mx-auto">
      <ul className="flex gap-4 ">
        <li className="w-1/6 grow rounded-xl p-4  text-white bg-gradient-to-r from-emerald-400 to-emerald-500">
          <Link href="/wenivooks">
            위니북스
            <LineChartMin text="위니북스" values={data1} />
          </Link>
        </li>
        <li className="w-1/6 grow  rounded-xl p-4 text-white bg-gradient-to-r from-blue-400 to-blue-500">
          <Link href="/wenivlink">
            위니브 링크
            <LineChartMin text="위니브 링크" values={data2} />
          </Link>
        </li>
        <li className="w-1/6 grow  rounded-xl p-4  text-white bg-gradient-to-r from-indigo-400 to-indigo-500">
          <Link href="/wenivworld">
            위니브 월드
            <LineChartMin text="위니브 월드" values={data3} />
          </Link>
        </li>
        <li className="w-1/6 grow rounded-xl p-4  text-white bg-gradient-to-r from-amber-400 to-amber-500">
          <Link href="/wenivsql">
            위니브 SQL
            <LineChartMin text="위니브 SQL" values={data4} />
          </Link>
        </li>
        <li className="w-1/6 grow rounded-xl p-4  text-white bg-gradient-to-r from-rose-300 to-rose-400">
          <Link href="/wenivnotebook">
            위니브 노트북
            <LineChartMin text="위니브 노트북" values={data5} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
