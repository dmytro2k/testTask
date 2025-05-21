import { comments } from '../database/Schema';
import { DrizzleProvider } from '../database/dbProvider';
import { and, eq, sql, gt, gte, lte, lt, SQL } from 'drizzle-orm';
import NotFoundError from '../errors/NotFoundError';

type CreateNewCommentProps = {
  productId: string,
  commentDescription: string,
}
type DeleteCommentByIdProps = {
  commentId: string
}
type UpdateCommentProps = {
  commentId: string,
  commentDescription: string,
}
type GetCommentByIdProps = {
  commentId: string
}

export const createNewComment = async ({productId,commentDescription}: CreateNewCommentProps) => {
  const comment = DrizzleProvider.getInstance().insert(comments).values({commentDescription, productId}).returning();
  return comment
};

export const deleteCommentsById = async ({commentId}: DeleteCommentByIdProps) => {
  const [comment] = await DrizzleProvider.getInstance().select({}).from(comments).where(eq(comments.commentId, commentId))

  if (!comment) {
    throw new NotFoundError('not found such comment');
  }

  await DrizzleProvider.getInstance().delete(comments).where(eq(comments.commentId, commentId))
};

export const updateComment = async ({commentDescription, commentId}: UpdateCommentProps) => {
  const [comment] = await DrizzleProvider.getInstance().select({}).from(comments).where(eq(comments.commentId, commentId))

  if (!comment) {
    throw new NotFoundError('not found such comment');
  }

  const [editedComment] = await DrizzleProvider.getInstance().update(comments).set({ commentDescription, }).where(eq(comments.commentId, commentId)).returning()
  return editedComment
};

export const getCommentById = async ({commentId}: GetCommentByIdProps) => {
  const [comment] = await DrizzleProvider.getInstance().select({}).from(comments).where(eq(comments.commentId, commentId))
  return comments
};

export const getAllComments = async () => {
  const allComments = await DrizzleProvider.getInstance().select({}).from(comments)
  return allComments
};