import mongoose, { Schema } from 'mongoose';
import appConfig from '../../config/appConfig';
const photoSchema = new Schema({
  orginalname: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

photoSchema.methods.getUrl = function () {
  return `${appConfig.url}/images/${this.fileName}`;
};
const Photo = mongoose.model('photos', photoSchema);
export default Photo;
