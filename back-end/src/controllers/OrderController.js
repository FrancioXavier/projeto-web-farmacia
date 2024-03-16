class OrderController {
  async index(req, res) {
    res.json('Index');
  }

  async getOrders(req, res) {
    res.json('getOrders');
  }

  async getOrderById(req, res) {
    res.json('getOrderById');
  }

  async newOrder(req, res) {
    res.json('newOrder');
  }

  async updateOrder(req, res) {
    res.json('updateOrder');
  }

  async deleteOrder(req, res) {
    res.json('deletOrder');
  }
}

export default new OrderController();
