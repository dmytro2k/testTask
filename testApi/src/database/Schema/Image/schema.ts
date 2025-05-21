import { pgTable, pgEnum, uuid, text } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel, relations } from 'drizzle-orm';
import { products } from '..';

export const imageTypeEnum = pgEnum('type', ['post', 'avatar']);

export const images = pgTable('images', {
  imageId: uuid('image_id').defaultRandom().primaryKey(),
  imageName: uuid('image_name').notNull().unique(),
  imageExtension: text('image_extension').notNull(),
});

export const imagesRelations = relations(images, ({ one }) => ({
  product: one(products),
}));

export type Image = InferSelectModel<typeof images>;
export type NewImage = InferInsertModel<typeof images>;
