interface CheckboxGroupProps {
  title: string;
  min: number;
  max: number;
  step: number;
  value: any;
  name: string;
  onChange: any;
}

export default function RangeSet({
  title,
  min,
  max,
  step,
  value,
  name,
  onChange,
}: CheckboxGroupProps) {
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
