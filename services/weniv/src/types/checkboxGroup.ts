export interface CheckboxGroupProps {
  title: string;
  options: string[];
  values: string[];
  onChange: (value: string, checked: boolean) => void;
}
