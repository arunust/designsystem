import React from 'react'
import ButtonPropsTypes from './type'
import clasNames from 'classnames'
const Button: React.FC<ButtonPropsTypes> = ({ onClick,
  variant = "primary", variantType="solid",
   children, type, className, ...restProps }) => {


const btnClassName = clasNames("py-2 px-4 rounded-md cursor-pointer",{
  "bg-primary hover:bg-secondary": variant === 'primary',
  "bg-secondary hover:bg-tertiary": variant === 'secondary',
  "bg-accent ": variant === 'accent',
  "bg-tertiary hover:bg-secondary": variant === 'tertiary',
  "border border-solid border-primary bg-transparent": variant === 'primary' && variantType === 'outline',
  "border border-solid border-secondary bg-transparent": variant === 'secondary' && variantType === 'outline',
  "border border-solid border-accent bg-transparent": variant === 'accent' && variantType === 'outline',
  "border border-solid border-tertiary bg-transparent": variant === 'tertiary' && variantType === 'outline',
},className);
  return (
    <button
      onClick={onClick}
      className={btnClassName}
      type={type}
      {...restProps}>
      <span className='flex items-center justify-center gap-3'>
        {children}
      </span>
    </button>
  )
}

export default Button