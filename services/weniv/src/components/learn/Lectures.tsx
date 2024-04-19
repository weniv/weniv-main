import '@weniv/components-card/style.css';
import { CardList, CardProps } from '@weniv/components-card';

export default function Lectures({ data }: { data: CardProps[] }) {
  if (data) {
    return (
      <div className="flex-grow p-8 box-border">
        <h2 className="h-8">
          총 <strong>{data.length}개</strong>의 강의가 있습니다
        </h2>
        {data && <CardList data={data} />}
      </div>
    );
  }
}
