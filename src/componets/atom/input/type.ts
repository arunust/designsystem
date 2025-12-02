import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color'
    | 'file'
    | 'range'
    | 'checkbox'
    | 'radio';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'rounded' | 'square';
}
