import multer from 'multer';
import multerConfig from '../../config/multerConfig';
import Photo from '../Models/Photo';
const upload = multer(multerConfig).single('file');

class PhotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      console.log(req.params.id);
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const productId = req.params.id;
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
