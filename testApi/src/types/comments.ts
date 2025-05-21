import { z } from 'zod';

const comment = z.object({
  commentId: z.string().uuid(),
  productId: z.string().uuid(),
  commentDescription: z.string(),
  commentDate: z.date()
})

export const CreateCommentBodyZodSchema = comment.omit({commentId: true, commentDate: true}).required()
export const DeleteCommentParamsZodSchema = comment.pick({commentId: true}).required()
export const DeleteCommentBodyZodSchema = comment.pick({})
export const EditCommentParamsZodSchema = comment.pick({commentId: true}).required()
export const EditCommentBodyZodSchema = comment.omit({ commentId: true, commentDate: true, productId: true}).required();
export const GetCommentParamsZodSchema = comment.pick({commentId: true}).required()
export const GetCommentBodyZodSchema = comment.pick({})
export const GetCommentsBodyZodSchema = comment.pick({})

export type CreateCommentBody = z.infer<typeof CreateCommentBodyZodSchema>;
export type DeleteCommentParams = z.infer<typeof DeleteCommentParamsZodSchema>;
export type DeleteCommentBody = z.infer<typeof DeleteCommentBodyZodSchema>;
export type EditCommentParams = z.infer<typeof EditCommentParamsZodSchema>;
export type EditCommentBody = z.infer<typeof EditCommentBodyZodSchema>;
export type GetCommentParams = z.infer<typeof GetCommentParamsZodSchema>;
export type GetCommentBody = z.infer<typeof GetCommentBodyZodSchema>;
export type GetCommentsBody = z.infer<typeof GetCommentsBodyZodSchema>;