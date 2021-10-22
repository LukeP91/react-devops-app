import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type ButtonColor = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'small' | 'default' | 'large';

interface BaseButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  loading?: boolean;
  inverse?: boolean;
  disabled?: boolean;
}

type ButtonPros = BaseButtonProps & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonPros> = ({
  children,
  color = 'primary',
  size = 'default',
  loading,
  inverse,
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        `btn -${color}`,
        {
          '-loading': loading,
          '-disabled': disabled,
          '-inverse': inverse,
          '-small': size === 'small',
          '-lage': size === 'large',
        },
        props.className || {},
      )}
      {...props}
    >
      {children}
    </button>
  );
};
