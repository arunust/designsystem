import React from 'react';
import clsx from 'classnames';
import {InputProps}  from './type';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder = '',
  leftIcon,
  rightIcon,
  variant = 'rounded',
  className,
  ...props
}, ref) => {
  return (
    <div
      className={clsx(
        'flex items-center w-full border border-gray-300 bg-white text-sm text-gray-800 focus-within:ring-2 focus-within:ring-primary-500',
        {
          'rounded-md': variant === 'rounded',
          'rounded-none': variant === 'square',
        },
        className
      )}
    >
      {leftIcon && <span className="pl-2 pr-2 text-gray-500">{leftIcon}</span>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={clsx(
            'w-full px-3 py-2 focus:outline-none bg-transparent',
            { 'pl-1': !!leftIcon, 'pr-1': !!rightIcon }
          )}
        {...props}
      />
      {rightIcon && <span className="pr-2 pl-2 text-gray-500">{rightIcon}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
