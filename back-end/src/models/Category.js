import mongoose, { Schema } from 'mongoose';
const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: [true, 'Categoria já existe'],
  },
});
const Category = mongoose.model('categories', categorySchema);
export default Category;
