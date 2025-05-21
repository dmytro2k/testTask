import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  CreateProductBody,
  DeleteProductParams,
  DeleteProductBody,
  EditProductParams,
  EditProductBody,
  GetProductParams,
  GetProductBody,
  GetProductsBody,
} from '../types/products';
import { TypedRequest } from '../types';
import {
  createNewProduct,
  deleteProductById,
  updateProduct,
  getProductById,
  getAllProducts
} from '../services/products';

export const createProduct = async (req: TypedRequest<CreateProductBody, {}, {}>, res: Response, next: NextFunction) => {
  const { productCount, productName, productSizeHeight, productSizeWidth, productWeight } = req.body;

  const product = await createNewProduct({ productCount, productName, productSizeHeight, productSizeWidth, productWeight });

  res.status(StatusCodes.CREATED).json(product);
};

export const deleteProduct = async (req: TypedRequest<DeleteProductBody, DeleteProductParams, {}>, res: Response, next: NextFunction) => {
  const { productId } = req.params;

  await deleteProductById({ productId });

  res.status(StatusCodes.NO_CONTENT).json();
};

export const editProduct = async (req: TypedRequest<EditProductBody, EditProductParams, {}>, res: Response, next: NextFunction) => {
  const { productId } = req.params;
  const { productCount, productName, productSizeHeight, productSizeWidth, productWeight } = req.body;

  const product = await updateProduct({ productId, productCount, productName, productSizeHeight, productSizeWidth, productWeight });

  res.status(StatusCodes.OK).json(product);
};

export const getProduct = async (req: TypedRequest<GetProductBody, GetProductParams, {}>, res: Response, next: NextFunction) => {
  const { productId } = req.params;

  const product = await getProductById({ productId });

  res.status(StatusCodes.OK).json(product);
};

export const getProducts = async (req: TypedRequest<GetProductsBody, {}, {}>, res: Response, next: NextFunction) => {
  const products = await getAllProducts();

  res.status(StatusCodes.OK).json(products);
};