import { type ComponentPropsWithoutRef, type FC } from 'react'

type ProductInfoProps = ComponentPropsWithoutRef<'div'> & {
  count: number,
  size: {
    width: number,
    height: number
  },
  weight: string,
}

const ProductInfo: FC<ProductInfoProps> = ({ count, size, weight, className = '', children, ...rest}) => {
  return <div {...rest} className={className}>
    <div>
      <h5>Count: {count}</h5>
    </div>
    <div>
      <h5>Size</h5>
      <p>width: {size.width}</p>
      <p>heght: {size.height}</p>
    </div>
    <div>
      <h5>Weight: {weight}</h5>
    </div>
  </div>
}

export default ProductInfo