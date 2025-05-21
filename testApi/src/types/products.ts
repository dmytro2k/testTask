import { z } from 'zod';

const product = z.object({
  productId: z.string().uuid(),
  productImageUrl: z.string(),
  productName: z.string(),
  productCount: z.number().int(),
  productSizeWidth: z.number().int(),
  productSizeHeight: z.number().int(),
  productWeight: z.string()
})

export const CreateProductBodyZodSchema = product.omit({productId: true}).required()
export const DeleteProductParamsZodSchema = product.pick({productId: true}).required()
export const DeleteProductBodyZodSchema = product.pick({})
export const EditProductParamsZodSchema = product.pick({productId: true}).required()
export const EditProductBodyZodSchema = product.omit({ productId: true, productImageUrl: true }).required();
export const GetProductParamsZodSchema = product.pick({productId: true}).required()
export const GetProductBodyZodSchema = product.pick({})
export const GetProductsBodyZodSchema = product.pick({})

export type CreateProductBody = z.infer<typeof CreateProductBodyZodSchema>;
export type DeleteProductParams = z.infer<typeof DeleteProductParamsZodSchema>;
export type DeleteProductBody = z.infer<typeof DeleteProductBodyZodSchema>;
export type EditProductParams = z.infer<typeof EditProductParamsZodSchema>;
export type EditProductBody = z.infer<typeof EditProductBodyZodSchema>;
export type GetProductParams = z.infer<typeof GetProductParamsZodSchema>;
export type GetProductBody = z.infer<typeof GetProductBodyZodSchema>;
export type GetProductsBody = z.infer<typeof GetProductsBodyZodSchema>;