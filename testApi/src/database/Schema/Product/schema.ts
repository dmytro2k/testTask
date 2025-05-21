import { date, integer, pgTable, text, timestamp, unique, uuid } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel, relations } from 'drizzle-orm';
import { images } from '..';

export const products = pgTable('products', {
  productId: uuid('product_id').defaultRandom().primaryKey(),
  productImageUrl: uuid('product_image_id').references(() => images.imageId, { onDelete: 'cascade', onUpdate: 'cascade' }),
  productName: text('product_name').notNull(),
  productCount: integer('product_count').notNull(),
  productSizeWidth: integer('product_size_width').notNull(),
  productSizeHeight: integer('product_size_height').notNull(),
  productWeight: text('product_weight').notNull(),
});

export type Product = InferSelectModel<typeof products>;
export type NewProduct = InferInsertModel<typeof products>;