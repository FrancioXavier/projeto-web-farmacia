import multer from 'multer';
import multerConfig from '../../config/multerConfig';
import Photo from '../Models/Photo';
const upload = multer(multerConfig).single('file');

class PhotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      req.body = '6612ad1a9673c9f94b5f63d3';
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { productId } = req.body;
        const foto = await Photo.create({
          originalname,
          filename,
          productId: productId,
        });
        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ['Produto não existe'],
        });
      }
    });
  }
}

export default new PhotoController();
