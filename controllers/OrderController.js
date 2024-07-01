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
    }
}

module.exports = OrderController