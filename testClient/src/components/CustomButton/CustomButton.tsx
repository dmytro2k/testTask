import { type ComponentPropsWithoutRef, type FC } from 'react'

type CustomButtonProps = ComponentPropsWithoutRef<'button'>;

const CustomButton: FC<CustomButtonProps> = ({ className = '', children, ...rest }) => {
  return <button {...rest} className={className}>{children}</button>
}

export default CustomButton