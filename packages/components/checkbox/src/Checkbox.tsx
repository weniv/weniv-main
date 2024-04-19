import { CheckboxProps } from './types';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

import { wrapStyle, inputStyle, iconStyle } from './style.css';

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, label, checked, ...rest } = props;

  return (
    <div className={`${wrapStyle}${className ? ` ${className}` : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        className={inputStyle}
        {...rest}
      />

      <label htmlFor={id}>
        {checked ? (
          <Icon name="squareCheckFill" color="primary" className={iconStyle} />
        ) : (
          <Icon name="squareCheck" color="grayLv2" className={iconStyle} />
        )}
        {label}
      </label>
    </div>
  );
};
