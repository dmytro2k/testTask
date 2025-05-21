import { type ComponentPropsWithoutRef, type FC } from 'react'

type ProductImageProps = ComponentPropsWithoutRef<'img'>;

const ProductImage: FC<ProductImageProps> = ({ className = '', children, ...rest }) => {
  return <img {...rest} className={className}/>
}

export default ProductImage