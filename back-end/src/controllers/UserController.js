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
    const user = new User({
      userName: 'francio',
      email: 'teste@teste.com',
      password: 'senha',
    });
    user.save().then(console.log('funcionou'));
    res.json(user);
  }

  async deleteUser(req, res) {
    res.json('deleteUser');
  }
}

export default new UserController();
