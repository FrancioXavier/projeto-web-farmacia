import axios from '../axios';

export async function getProducts() {
  try {
    const res = await axios.get('/product');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductsById(id) {
  try {
    const res = await axios.get(`/product/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductsByCategory(category) {
  try {
    console.log(category);
    const res = await axios.get(`/product/${category}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// async getProductById(req, res) {
//   try {
//     const id = req.productId;
//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).send(product);
//   } catch (error) {
//     // console.log(error);
//     return res.status(500).json({ message: 'Request error' });
//   }
// }

// async getProductByCategory(req, res) {
//   try {
//     const category = req.categoryName;
//     const product = await Product.findOne({ categoryName: category });

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).send(product);
//   } catch (error) {
//     // console.log(error);
//     return res.status(500).json({ message: 'Request error' });
//   }
// }

// async newProduct(req, res) {
//   try {
//     const product = new Product({
//       productName: req.body.productName,
//       categoryName: req.body.categoryName,
//       priceProduct: req.body.priceProduct,
//       amountProduct: req.body.amountProduct,
//       providerProduct: req.body.providerProduct,
//       imageProduct: req.body.imageProduct,
//     });

//     await product.save();

//     if (!product) {
//       return res.status(400).json({ message: 'Error when creating product' });
//     }
//     res.status(201).json(product);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: 'Request error' });
//   }
// }

// async updateProduct(req, res) {
//   try {
//     const id = req.productId;
//     const newProduct = req.body;
//     const product = await Product.findByIdAndUpdate(id, newProduct, {
//       new: true,
//     });

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).send(newProduct);
//   } catch (error) {
//     // console.log(error);
//     return res.status(500).json({ message: 'Request error' });
//   }
// }
