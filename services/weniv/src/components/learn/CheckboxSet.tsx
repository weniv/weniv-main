interface CheckboxGroupProps {
  legend: string;
  name: string;
  options: string[];
  values: string[];
  onChange: any;
}

import '@weniv/components-checkbox/style.css';
import { Checkbox } from '@weniv/components-checkbox';

export default function CheckboxSet({
  legend,
  name,
  options,
  values,
  onChange,
}: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>

      {options.map((option, index) => (
        <Checkbox
          key={index}
          name={name.toLowerCase()}
          id={`${name.toLowerCase()}-${option}`}
          value={option}
          label={option}
          onChange={onChange}
          checked={values.includes(option)}
        />
      ))}
    </fieldset>
  );
}
