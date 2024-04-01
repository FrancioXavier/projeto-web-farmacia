import User from '../Models/User';
import bcryptjs from 'bcryptjs';

class UserController {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro de requisicao' });
    }
  }

  async getUserById(req, res) {
    try {
      const id = req.userId;
      const user = await User.findById(id);

      if (!user)
        return res.status(404).json({ message: 'Usuario nao encontrado' });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro de requisicao' });
    }
  }

  async newUser(req, res) {
    const { name, cpf, telephone1, telephone2, email, password } = req.body;
    try {
      const user = new User({
        name: name,
        email: email,
        password: password,
        telephone1: telephone1,
        cpf: cpf,
        telephone2: telephone2,
      });

      await user.save();

      if (!user)
        return res.status(400).message({ message: 'erro ao criar usuario' });
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Erro de requisicao' });
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.userId;
      const userDelete = await User.findByIdAndDelete(id);

      if (!userDelete)
        return res.status(404).json({ message: 'Usuário não encontrado' });
      res.status(200).json({ message: 'Usuario deletado com sucesso' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro de requisicao' });
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.userId;
      console.log(id);
      const newUser = req.body;
      const stringPassword = newUser.password;

      newUser.password = await bcryptjs.hash(stringPassword, 10);
      const updatedUser = await User.findByIdAndUpdate(id, newUser, {
        new: true,
      });

      const {
        name,
        email,
        telephone1,
        telephone2,
        cpf,
        addressCep,
        addressState,
        addressCity,
        addressNeighborhood,
        addressComplement,
      } = updatedUser;

      if (!updatedUser)
        return res.status(404).json({ message: 'Usuário não encontrado' });
      res.status(200).json({
        id,
        name,
        password: stringPassword,
        email,
        telephone1,
        telephone2,
        cpf,
        addressCep,
        addressState,
        addressCity,
        addressNeighborhood,
        addressComplement,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
