import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    priceProduct: {
      type: Number,
      required: true,
    },
    amountProduct: {
      type: Number,
      required: true,
    },
    providerProduct: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
