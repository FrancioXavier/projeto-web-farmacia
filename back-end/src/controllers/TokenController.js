import jwt from 'jsonwebtoken';
import User from '../Models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email);
      if (!email || !password) {
        console.log(email, password);
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { nome: user.nome, id, email } });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TokenController();
