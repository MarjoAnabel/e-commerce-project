//const {Order,Product} = require('../models/index.js')

const OrderController = {
    create (re,res) {
        req.body.role = 'order'
        Order.create (req.body)
        .then ((product) =>
            res.status(201).send ({message:"Pedido creado", product})
        )
        .catch ((err)=> console.error (err))
    },

    async getAll(req, res) {
        try {
          const Order = await Order.findAll({
            include: [{ model: Product, through: { attributes: [] } }]
          })
          res.send(order)
        } catch (error) {
          console.error(error)
        }
      }
     
}

module.exports = OrderController