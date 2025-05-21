CREATE TABLE "images" (
	"image_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_name" uuid NOT NULL,
	"image_extension" text NOT NULL,
	CONSTRAINT "images_image_name_unique" UNIQUE("image_name")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"product_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_image_id" uuid,
	"product_name" text NOT NULL,
	"product_count" integer NOT NULL,
	"product_size_width" integer NOT NULL,
	"product_size_height" integer NOT NULL,
	"product_weight" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_product_image_id_images_image_id_fk" FOREIGN KEY ("product_image_id") REFERENCES "public"."images"("image_id") ON DELETE cascade ON UPDATE cascade;