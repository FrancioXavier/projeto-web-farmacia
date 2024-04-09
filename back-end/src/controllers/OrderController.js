import Order from '../Models/orders';

class OrderController {
  async index(req, res) {
    res.json('Index');
  }

  async getOrdersByUser(req, res) {
    try {
      const order = await Order.find({ userId: req.userId });

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
        userId: userId,
        invoiceNumber: req.body.invoiceNumber,
        products: req.body.products,
        isOpen: req.body.isOpen,
      });
      await order.save();
      res.status(200).send({ mensage: 'Pedido realizado com sucesso', order });
    } catch (error) {
      console.log(error);
      res.status(500).send({ mensage: 'Erro de requisicao' });
    }
  }

  async finishOrder(req, res) {
    try {
      const orderId = req.orderId;
      await Order.findByIdAndUpdate(orderId, {
        isOpen: false,
      });

      res.status(200).send({ mensage: 'Pedido finalizado com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ mensage: 'Erro de requisicao' });
    }
  }

  async deleteOrder(req, res) {
    res.json('deletOrder');
  }
}

export default new OrderController();
