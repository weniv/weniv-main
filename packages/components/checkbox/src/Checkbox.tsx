import { CheckboxProps } from './types';
import styles from './Checkbox.module.css';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, label, checked, ...rest } = props;

  return (
    <div
      className={`${styles['check-wrap']}${className ? ` ${className}` : ''}`}
    >
      <input
        type="checkbox"
        className={styles['check-input']}
        checked={checked}
        id={id}
        {...rest}
      />

      <label htmlFor={id} className={styles['check-label']}>
        {checked ? (
          <Icon
            name="squareCheckFill"
            color="primary"
            className={styles['icon']}
          />
        ) : (
          <Icon name="squareCheck" color="grayLv2" className={styles['icon']} />
        )}
        {label}
      </label>
    </div>
  );
};
