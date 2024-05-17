import { format } from 'date-fns';

import { Icon } from '@weniv/components-icons';

export default function Period() {
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="h-24 flex items-center p-8 gap-6 justify-end">
      <div className="flex rounded-xl h-16 items-center px-4">
        <Icon name="calendar" width={24} height={24} color="grayLv3" />
        <select className="bg-transparent">
          <option>30일</option>
          <option>14일</option>
          <option>7일</option>
        </select>
      </div>
      <label>
        start:
        <input type="date" className="bg-transparent" />
      </label>
      <label>
        end:
        <input
          type="date"
          max={today}
          value={today}
          className="bg-transparent"
        />
      </label>
    </div>
  );
}
