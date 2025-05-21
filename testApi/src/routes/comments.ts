import express from 'express';
import { createComment, deleteComment, editComment, getComment, getComments } from '../controllers/comments';
import { validateData } from '../middlewares/validation';
import {
  CreateCommentBodyZodSchema,
  DeleteCommentParamsZodSchema,
  DeleteCommentBodyZodSchema,
  EditCommentParamsZodSchema,
  EditCommentBodyZodSchema,
  GetCommentParamsZodSchema,
  GetCommentBodyZodSchema,
  GetCommentsBodyZodSchema,
} from '../types/comments';
import { handleRequest } from '../utils/request';

const router = express.Router();

router.route('/').post(validateData(CreateCommentBodyZodSchema), handleRequest(createComment));
router
  .route('/:todoId')
  .delete(validateData(DeleteCommentBodyZodSchema, DeleteCommentParamsZodSchema), handleRequest(deleteComment))
  .patch(validateData(EditCommentBodyZodSchema, EditCommentParamsZodSchema), handleRequest(editComment))
  .get(validateData(GetCommentBodyZodSchema, GetCommentParamsZodSchema), handleRequest(getComment))

router.route('/all').post(validateData(GetCommentsBodyZodSchema), handleRequest(getComments));

export default router;