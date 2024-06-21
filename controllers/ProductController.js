const {Product, Category} = require ('../models/index')

const ProductController = {

    create (re,res) {
        req.body.role = 'product'
        Product.create (req.body)
        .then ((product) =>
            res.status(201).send ({message:"Producto creado", product})
        )
        .catch ((err)=> console.error (err))
    },

}


module.exports = ProductController