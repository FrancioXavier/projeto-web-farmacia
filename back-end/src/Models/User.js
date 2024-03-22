import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: [true, 'Email já existe'],
      required: true,
      validate: {
        validator: async function (email) {
          const user = await this.constructor.findOne({ email });
          return !user;
        },
        message: 'Email já existe',
      },
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber1: {
      type: Number,
      required: true,
    },
    phoneNumber2: {
      type: Number,
    },
    cpf: {
      type: String,
      required: true,
      min: 10000000000,
    },
    addressCep: {
      type: Number,
      min: 10000000,
    },
    addressState: {
      type: String,
    },
    addressCity: {
      type: String,
    },
    addressNeighborhood: {
      type: String,
    },
    addressComplement: {
      type: String,
    },
    addressPublicPlace: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hashedPassword = await bcryptjs.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.passwordIsValid = function (password) {
  return bcryptjs.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
