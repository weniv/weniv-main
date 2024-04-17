import { SearchProps } from './types';
import { Icon } from '@weniv/components-icons';

import './style.css';

export const Search = (props: SearchProps) => {
  const { className, placeholder, label = '검색' } = props;

  return (
    <form className={`search-form${className ? ` ${className}` : ''}`}>
      <label htmlFor="search" className="a11y-hidden">
        {label}
      </label>
      <input
        type="search"
        id="search"
        placeholder={placeholder ? placeholder : '검색어'}
      />
      <button type="submit" className="search-btn">
        <Icon name="search" />
      </button>
    </form>
  );
};
