const {Order,Product} = require('../models/index.js')

const OrderController = {
    create (req,res) {
        req.body.role = 'order'
        Order.create (req.body)
        .then ((order) =>
            res.status(201).send ({message:"Pedido creado", order})
        )
        .catch ((err)=> console.error (err))
    },

    async getAll(req, res) {
        try {
          const orders = await Order.findAll({
            include: [{ model: Product, through: { attributes: ['ProductId'] } }]
          })
          res.send(orders)
        } catch (error) {
          console.error(error)
        }
      },

    getById(req, res) {
      Order.findByPk(req.params.id)
      .then((order) => {
        if (order) {
          res.send(order);
        } else {
          res.status(404).send({ message: 'Pedido no encontrado' });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Ha habido un problema al buscar el pedido',
          error: err.message
        })
      })
    }
}

module.exports = OrderController