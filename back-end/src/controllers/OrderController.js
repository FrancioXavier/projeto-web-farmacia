import Order from '../Models/orders';

class OrderController {
  async index(req, res) {
    res.json('Index');
  }

  async getOrdersByUser(req, res) {
    try {
      const order = await Order.find({ fkUser: req.userId });

      if (!order) {
        return res.status(404).send({ mesage: 'O usuario não tem pedidos' });
      }
      res.status(200).send(order);
    } catch (error) {
      console.log(error);
      res.status(500).send({ mesage: 'Erro de requisicao' });
    }
  }

  async getOrderById(req, res) {
    try {
      const id = req.params.id;
      const orderById = await Order.find({ _id: id });
      if (!orderById) {
        return res
          .status(404)
          .send({ mesage: 'Nao foi possivel encontrar o pedido' });
      }
      res.status(200).send(orderById);
    } catch (error) {
      console.log(error);
      res.status(500).send({ mensage: 'Erro de requisicao' });
    }
  }

  async newOrder(req, res) {
    try {
      const userId = req.userId;
      const order = new Order({
        totalPrice: req.body.totalPrice,
        fkUser: userId,
        invoiceNumber: req.body.invoiceNumber,
      });
      await order.save();
      res.status(200).send({ mensage: 'Pedido realizado com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ mensage: 'Erro de requisicao' });
    }
  }

  async updateOrder(req, res) {
    res.json('updateOrder');
  }

  async deleteOrder(req, res) {
    res.json('deletOrder');
  }
}

export default new OrderController();
