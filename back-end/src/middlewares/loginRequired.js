import jwt from 'jsonwebtoken';
import User from '../Models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = decoded;
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
