import '@weniv/components-checkbox/style.css';
import { Checkbox } from '@weniv/components-checkbox';
import { CheckboxProps } from '@types';

export default function CheckboxSet({
  legend,
  name,
  options,
  values = [],
  onChange,
}: CheckboxProps) {
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
