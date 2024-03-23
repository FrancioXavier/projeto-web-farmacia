import User from '../Models/User';

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
    try {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber1: req.body.phoneNumber1,
        cpf: req.body.cpf,
      });

      await user.save();

      if (!user)
        return res.status(400).message({ message: 'erro ao criar usuario' });
      res.json(user);
    } catch (e) {
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
      const newUser = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, newUser, {
        new: true,
      });
      if (!updatedUser)
        return res.status(404).json({ message: 'Usuário não encontrado' });
      res.status(200).json(updatedUser);
    } catch (error) {}
  }
}

export default new UserController();
