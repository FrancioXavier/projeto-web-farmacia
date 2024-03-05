import mongoose from 'mongoose';
import 'dotenv/config';

const mongoUrl = process.env.MONGO_URL;

export async function dbConnect() {
  try {
    await mongoose.connect(mongoUrl);
    console.log('connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}
