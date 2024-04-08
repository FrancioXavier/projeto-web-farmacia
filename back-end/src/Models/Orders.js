import mongoose, { Schema } from 'mongoose';
//import User = require('.User');

const orderSchema = new Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  fkUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  // fkProduct: [
  //   {
  //     product: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Product',
  //     },
  //     quantity: {
  //       type: Number,
  //       required: true,
  //     },
  //   },
  // ],
  // fkProduct: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Product',
  //   required: true,
  // },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
