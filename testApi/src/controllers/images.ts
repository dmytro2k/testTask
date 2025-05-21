import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getImageById } from '../services/images';
import { TypedRequest } from '../types';
import path from 'path';
import { GetImageParams } from '../types/images';

export const getImage = async (req: TypedRequest<{}, GetImageParams, {}>, res: Response) => {
  const { imageId } = req.params;
  const image = await getImageById({ imageId });

  const root = '/Users/dima/Desktop/study/testApi/images';
  const originalImagePath = path.join(root, 'originals', `${image.imageName}${image.imageExtension}`);

  res.status(StatusCodes.OK).sendFile(originalImagePath);
};

export const getCompressedImage = async (req: TypedRequest<{}, GetImageParams, {}>, res: Response) => {
  const { imageId } = req.params;
  const image = await getImageById({ imageId });

  const root = '/Users/dima/Desktop/study/testApi/images';
  const compressedImagePath = path.join(root, 'compressed', `${image.imageName}${image.imageExtension}`);

  res.status(StatusCodes.OK).sendFile(compressedImagePath);
};

export const getDefaultImage = async (req: Request, res: Response) => {
  const root = '/Users/dima/Desktop/study/testApi/images';
  const originalImagePath = path.join(root, 'originals', 'default.jpg');

  res.status(StatusCodes.OK).sendFile(originalImagePath);
};

export const getCompressedDefaultImage = async (req: Request, res: Response) => {
  const root = '/Users/dima/Desktop/study/testApi/images';
  const compressedImagePath = path.join(root, 'compressed', 'default.jpg');

  res.status(StatusCodes.OK).sendFile(compressedImagePath);
};
