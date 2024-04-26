import { FilterType } from './filterType';

export type SearchFilterProps = {
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filters: FilterType;
};
