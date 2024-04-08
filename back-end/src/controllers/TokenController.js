import jwt from 'jsonwebtoken';
import User from '../Models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if (!email || !password) {
        console.log(email, password);
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ email: email });

      console.log(user);

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
      console.log(user);
      const {
        id,
        name,
        telephone1,
        telephone2,
        cpf,
        addressCep,
        addressState,
        addressCity,
        addressNeighborhood,
        addressComplement,
      } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({
        token,
        user: {
          name,
          id,
          email,
          telephone1,
          telephone2,
          cpf,
          password,
          addressCep,
          addressState,
          addressCity,
          addressNeighborhood,
          addressComplement,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro no servidor' });
    }
  }
}

export default new TokenController();
