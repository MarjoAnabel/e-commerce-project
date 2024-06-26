const {Order,Product} = require('../models/index.js')

const OrderProductController = {
    getAll(req, res) {
        Order.findAll({include: [Product]})
           .then((orders) => res.send(orders))
           .catch((err) => {
           console.log(err)
           res.status(500).send({
                message: 'Ha habido un problema al cargar los productos',
               })
           })
       },
}

module.exports = OrderProductController