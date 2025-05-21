import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { BadRequestError } from '../errors';

const multerStorage = (dirPath: string) => {
  return multer.diskStorage({
    destination(_, file, cb) {
      const root = '/Users/dima/Desktop/study/test/testApi';
      cb(null, path.join(root, dirPath));
    },
    filename: (_, file, cb) => cb(null, `${uuidv4()}${path.extname(file.originalname)}`),
  });
};

export const uploadPostImage = multer({
  storage: multerStorage('images/originals'),
  fileFilter: (_, file, cb) => validateImageFile(file, cb),
});
export const uploadAvatarImage = multer({
  storage: multerStorage('images/originals'),
  fileFilter: (_, file, cb) => validateImageFile(file, cb),
});


export const validateImageFile = (file: Express.Multer.File | undefined, cb: Function): void => {
  if (file) {
    const filetypes = /jpeg|jpg|png|gif/;

    const mimetype = filetypes.test(file.mimetype);

    if (mimetype) {
      return cb(null, true);
    } else {
      cb(new BadRequestError('Images Only!'));
    }
  }
};
