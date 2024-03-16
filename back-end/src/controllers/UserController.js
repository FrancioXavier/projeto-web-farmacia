import User from '../Models/User';

class UserController {
  async index(req, res) {
    res.json('Index');
  }

  async getUsers(req, res) {
    res.json('getUsers');
  }

  async getUserById(req, res) {
    res.json('getUsers');
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
      return res.json(user);
    } catch (e) {
      return res.send(e);
    }
  }

  async deleteUser(req, res) {
    res.json('deleteUser');
  }
}

export default new UserController();
