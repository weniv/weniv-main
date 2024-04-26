export type RangeProps = {} & React.InputHTMLAttributes<HTMLInputElement>;
export type CheckboxProps = {
  name: string;
  legend: string;
  options: string[];
  values: string[];
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
