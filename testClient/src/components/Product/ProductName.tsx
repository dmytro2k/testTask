import { type ComponentPropsWithoutRef, type FC } from 'react'

type ProductNameProps = ComponentPropsWithoutRef<'h3'>;

const ProductName: FC<ProductNameProps> = ({ className = '', children, ...rest }) => {
  return <h3 {...rest} className={className}>{children}</h3>
}

export default ProductName