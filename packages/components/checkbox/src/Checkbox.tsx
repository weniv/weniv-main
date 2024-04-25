import { CheckboxProps } from './types';
import { clsx } from 'clsx';
import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

import { wrapStyle, inputStyle, iconStyle } from './style.css';

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, label, checked, ...rest } = props;

  return (
    <div className={clsx([wrapStyle, className ? className : null])}>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        className={inputStyle}
        {...rest}
      />

      <label htmlFor={id}>
        {checked ? (
          <Icon
            name="squareCheckFill"
            color="primary"
            className={iconStyle}
            width={24}
          />
        ) : (
          <Icon
            name="squareCheck"
            color="grayLv2"
            className={iconStyle}
            width={24}
          />
        )}
        {label}
      </label>
    </div>
  );
};
