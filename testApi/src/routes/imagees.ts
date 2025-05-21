import express from 'express';
const router = express.Router();

import { validateGetImage } from '../middlewares/uploadImage';
import { getCompressedDefaultImage, getCompressedImage, getDefaultImage, getImage } from '../controllers/images';

router.route('/original/default').get(getDefaultImage);
router.route('/original/:imageId').get(validateGetImage, getImage);
router.route('/compressed/default').get(getCompressedDefaultImage);
router.route('/compressed/:imageId').get(validateGetImage, getCompressedImage);

export default router;