import { gridStyle } from './style.css';

import { CardItem } from './CardItem';
import { CardProps } from './types';

export const CardList = ({ data }: { data: CardProps[] }) => {
  if (data.length > 0) {
    return (
      <ul className={gridStyle}>
        {data.map((itemData: any, index: number) => (
          <li key={index}>
            <CardItem data={itemData} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>데이터가 없습니다.</p>;
  }
};
