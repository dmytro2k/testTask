import { createContext, useContext } from 'react';

type ProductCardContextProps = {};

export const ProductCardContext = createContext<ProductCardContextProps>(null!);

export const useProductContext = () => {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error('No product card context found');
  }

  return context;
};