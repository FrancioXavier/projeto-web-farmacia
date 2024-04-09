import Product from '../Models/Product';

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      // console.log(error);
      // necessary return ?
      return res.status(500).json({ message: 'Request error' });
    }
  }

  async getProductById(req, res) {
    try {
      const id = req.params.productId;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).send(product);
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ message: 'Request error' });
    }
  }

  async getProductsByCategory(req, res) {
    try {
      const category = req.params.category;
      console.log(category);
      const product = await Product.find({ categoryName: category });

      if (!product) {
        return res.status(404).json({ message: 'AQUI Product not found' });
      }
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Request error' });
    }
  }

  async newProduct(req, res) {
    try {
      const product = new Product({
        productName: req.body.productName,
        categoryName: req.body.categoryName,
        priceProduct: req.body.priceProduct,
        amountProduct: req.body.amountProduct,
        providerProduct: req.body.providerProduct,
        imageProduct: req.body.imageProduct,
      });

      await product.save();

      if (!product) {
        return res.status(400).json({ message: 'Error when creating product' });
      }
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Request error' });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.productId;
      const newProduct = req.body;
      const product = await Product.findByIdAndUpdate(id, newProduct, {
        new: true,
      });

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).send(newProduct);
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ message: 'Request error' });
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.productId;
      const productDelete = await Product.findByIdAndDelete(id);

      if (!productDelete) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ message: 'Request error' });
    }
  }
}

export default new ProductController();
