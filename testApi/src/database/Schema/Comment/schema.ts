import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel, relations } from 'drizzle-orm';
import { products } from '..';

export const comments = pgTable('comments', {
  commentId: uuid('comment_id').defaultRandom().primaryKey(),
  productId: uuid('product_id')
    .notNull()
    .references(() => products.productId, { onDelete: 'cascade', onUpdate: 'cascade' }),
  commentDescription: text('comment_description').notNull(),
  commentDate: timestamp('date', { precision: 0, withTimezone: false }).notNull().defaultNow(),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  product: one(products, {
    fields: [comments.productId],
    references: [products.productId],
  }),
}));

export type Comment = InferSelectModel<typeof comments>;
export type NewComment = InferInsertModel<typeof comments>;
