import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  CreateCommentBody,
  DeleteCommentParams,
  DeleteCommentBody,
  EditCommentParams,
  EditCommentBody,
  GetCommentParams,
  GetCommentBody,
  GetCommentsBody,
} from '../types/comments';
import { TypedRequest } from '../types';
import {
  createNewComment,
  deleteCommentsById,
  updateComment,
  getCommentById,
  getAllComments
} from '../services/comments';

export const createComment = async (req: TypedRequest<CreateCommentBody, {}, {}>, res: Response, next: NextFunction) => {
  const { productId, commentDescription } = req.body;

  const comment = await createNewComment({ productId, commentDescription });

  res.status(StatusCodes.CREATED).json(comment);
};

export const deleteComment = async (req: TypedRequest<DeleteCommentBody, DeleteCommentParams, {}>, res: Response, next: NextFunction) => {
  const { commentId } = req.params;

  await deleteCommentsById({ commentId });

  res.status(StatusCodes.NO_CONTENT).json();
};

export const editComment = async (req: TypedRequest<EditCommentBody, EditCommentParams, {}>, res: Response, next: NextFunction) => {
  const { commentId } = req.params;
  const { commentDescription } = req.body;

  const product = await updateComment({ commentId, commentDescription });

  res.status(StatusCodes.OK).json(product);
};

export const getComment = async (req: TypedRequest<GetCommentBody, GetCommentParams, {}>, res: Response, next: NextFunction) => {
  const { commentId } = req.params;

  const comment = await getCommentById({ commentId });

  res.status(StatusCodes.OK).json(comment);
};

export const getComments = async (req: TypedRequest<GetCommentsBody, {}, {}>, res: Response, next: NextFunction) => {
  const comments = await getAllComments();

  res.status(StatusCodes.OK).json(comments);
};