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
    res.json('newUser');
  }

  async deleteUser(req, res) {
    res.json('deleteUser');
  }
}

export default new UserController();
