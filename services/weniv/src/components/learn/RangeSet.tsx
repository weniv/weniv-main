import { RangeProps } from '@types';

export default function RangeSet({
  title,
  min,
  max,
  step,
  value,
  name,
  onChange,
}: RangeProps) {
  return (
    <fieldset>
      <legend>{title}</legend>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        onChange={onChange}
      />
    </fieldset>
  );
}
