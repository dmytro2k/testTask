import { eq } from 'drizzle-orm';
import path from 'path';
import { DrizzleProvider } from '../database/dbProvider';
import { images } from '../database/Schema';
import { NotFoundError } from '../errors';
import { deleteImageFile } from '../utils/image';

type CreateImageProps = {
  file: Express.Multer.File;
};

type DeleteImageByIDProps = {
  imageId: string;
};

type GetImageByIdProps = {
  imageId: string;
};

export const createImage = async ({ file}: CreateImageProps) => {
  const imageExtension = path.extname(file.filename);
  const imageName = path.basename(file.filename, imageExtension);

  const [image] = await DrizzleProvider.getInstance().insert(images).values({ imageName, imageExtension }).returning();
  return image.imageId;
};

export const deleteImageById = async ({ imageId }: DeleteImageByIDProps) => {
  const image = await getImageById({ imageId });

  if (!image) {
    throw new NotFoundError('Not found such image');
  }
  const imagename = image.imageName + image.imageExtension;

  Promise.all([
    DrizzleProvider.getInstance().delete(images).where(eq(images.imageId, imageId)),
    deleteImageFile(imagename),
  ]);
};

export const getImageById = async ({ imageId }: GetImageByIdProps) => {
  const [image] = await DrizzleProvider.getInstance().select().from(images).where(eq(images.imageId, imageId));

  return image;
};
