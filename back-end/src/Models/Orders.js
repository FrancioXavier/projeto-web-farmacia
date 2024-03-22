import mongoose, { Schema } from 'mongoose';
//import User = require('.User');

const orderSchema = new Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  fkUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receipt: {
    data: Buffer,
    contentType: String,
    required: true,
  },
  fkProduct: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  // fkProduct: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Product',
  //   required: true,
  // },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
