import { products } from '../database/Schema';
import { DrizzleProvider } from '../database/dbProvider';
import { and, eq, sql, gt, gte, lte, lt, SQL } from 'drizzle-orm';
import NotFoundError from '../errors/NotFoundError';

type CreateNewProductProps = {
  productCount: number,
  productName: string,
  productSizeHeight: number,
  productSizeWidth: number,
  productWeight: string
}
type DeleteProductByIdProps = {
  productId: string
}
type UpdateProductProps = {
  productId: string
  productCount: number,
  productName: string,
  productSizeHeight: number,
  productSizeWidth: number,
  productWeight: string
}
type GetProductByIdProps = {
  productId: string
}

export const createNewProduct = async ({productCount, productName, productSizeHeight, productSizeWidth, productWeight}: CreateNewProductProps) => {
  const product = DrizzleProvider.getInstance().insert(products).values({productCount, productName, productSizeHeight, productSizeWidth, productWeight}).returning();
  return product
};

export const deleteProductById = async ({productId}: DeleteProductByIdProps) => {
  const [product] = await DrizzleProvider.getInstance().select({}).from(products).where(eq(products.productId, productId))

  if (!product) {
    throw new NotFoundError('not found such comment');
  }

  await DrizzleProvider.getInstance().delete(products).where(eq(products.productId, productId))
};

export const updateProduct = async ({productId, productCount, productName, productSizeHeight, productSizeWidth, productWeight}: UpdateProductProps) => {
  const product = await DrizzleProvider.getInstance().select({}).from(products).where(eq(products.productId, productId))

  if (!product) {
    throw new NotFoundError('not found such comment');
  }

  const [editedProduct] = await DrizzleProvider.getInstance().update(products).set({productCount, productName, productSizeHeight, productSizeWidth, productWeight}).where(eq(products.productId, productId)).returning()
  return editedProduct
};

export const getProductById = async ({productId}: GetProductByIdProps) => {
  const [product] = await DrizzleProvider.getInstance().select({}).from(products).where(eq(products.productId, productId))
  return product
};

export const getAllProducts = async () => {
  const allProducts = await DrizzleProvider.getInstance().select({}).from(products)
  return allProducts
};