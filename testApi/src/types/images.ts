import { z } from 'zod';

const image = z.object({
  imageId: z.string().uuid(),
  imageName: z.string().uuid(),
  imageExtension: z.string()
})

export const GetImageParamsZodSchema = image.pick({imageId: true}).required()

export type GetImageParams = z.infer<typeof GetImageParamsZodSchema>;