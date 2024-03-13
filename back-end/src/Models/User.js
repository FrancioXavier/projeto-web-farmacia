import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema({
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
        return !user; // Retorna true se não encontrar nenhum usuário com o mesmo email
      },
      message: 'Email já existe',
    },
  },
  password: {
    type: String,
    required: true,
  },
});

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
