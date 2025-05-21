import { type ComponentPropsWithoutRef, type FC } from 'react';
import { ProductCardContext } from './ProductCardProvider';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import Button from '../CustomButton/CustomButton';
import ProductInfo from './ProductInfo';

type ProductCardComponentProps = ComponentPropsWithoutRef<'div'>;

const ProductCardComponent: FC<ProductCardComponentProps> = ({ className = '', children, ...rest }) => {
  return (
    <ProductCardContext.Provider value={{ }}>
      <div {...rest} className={className}>
        {children}
      </div>
    </ProductCardContext.Provider>
  );
};

const ProductCard = Object.assign(ProductCardComponent, {
  Image: ProductImage,
  Name: ProductName,
  Info: ProductInfo,
  Button
});

export default ProductCard;