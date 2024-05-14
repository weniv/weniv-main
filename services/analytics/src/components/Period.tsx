import { format } from 'date-fns';

export default function Period() {
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="h-24 flex items-center p-8">
      <label>
        start:
        <input type="date" />
      </label>
      <label>
        end:
        <input type="date" max={today} value={today} />
      </label>
    </div>
  );
}
