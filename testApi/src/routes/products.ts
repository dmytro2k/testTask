import express from 'express';
import { createProduct, deleteProduct, editProduct, getProduct, getProducts } from '../controllers/products';
import { validateData } from '../middlewares/validation';
import {
  CreateProductBodyZodSchema,
  DeleteProductParamsZodSchema,
  DeleteProductBodyZodSchema,
  EditProductParamsZodSchema,
  EditProductBodyZodSchema,
  GetProductParamsZodSchema,
  GetProductBodyZodSchema,
  GetProductsBodyZodSchema,
} from '../types/products';
import { handleRequest } from '../utils/request';

const router = express.Router();

router.route('/').post(validateData(CreateProductBodyZodSchema), handleRequest(createProduct));
router
  .route('/:productId')
  .delete(validateData(DeleteProductBodyZodSchema, DeleteProductParamsZodSchema), handleRequest(deleteProduct))
  .patch(validateData(EditProductBodyZodSchema, EditProductParamsZodSchema), handleRequest(editProduct))
  .get(validateData(GetProductBodyZodSchema, GetProductParamsZodSchema), handleRequest(getProduct))

router.route('/all').post(validateData(GetProductsBodyZodSchema), handleRequest(getProducts));

export default router;