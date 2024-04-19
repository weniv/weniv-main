import { SearchProps } from './types';
import { formStyle, inputStyle, btnStyle } from './style.css';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

export const Search = (props: SearchProps) => {
  const {
    className,
    placeholder,
    label = '검색',
    color = 'grayLv3',
    ...rest
  } = props;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${formStyle}${className ? ` ${className}` : ''}`}
    >
      <label htmlFor="search" className="a11y-hidden">
        {label}
      </label>
      <input
        className={inputStyle}
        type="search"
        id="search"
        placeholder={placeholder ? placeholder : '검색어'}
        {...rest}
      />
      <button className={btnStyle}>
        <Icon name="search" color={color} />
      </button>
    </form>
  );
};
