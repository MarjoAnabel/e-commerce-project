const {Product,Category,Sequelize} = require('../models/index.js')
const { Op } = Sequelize

const ProductController = {
    create (req,res) {
        req.body.role = 'product'
        Product.create ({...req.body, id:req.user.id})
        .then ((product) => {
          product.addOrder(req.body.OrderId)
            res.status(201).send ({message:"Producto creado", product})
        })
        .catch ((err)=> console.error (err))
    },

    async update(req, res) {
        await Product.update(
        { name: req.body.name, description: req.body.description, price:req.body.price, stock:req.body.price, id_category:req.body.id_category },
        { where: { id: req.params.id } }
        )
        res.send('Producto actualizado con éxito')
     },

        async delete(req, res) {
            await Product.destroy({
            where: {
                id: req.params.id,
            },
         })
            res.send('El producto ha sido eliminado con éxito')
    },

    getAll(req, res) {
     Product.findAll({include: [Category]})
        .then((products) => res.send(products))
        .catch((err) => {
        console.log(err)
        res.status(500).send({
             message: 'Ha habido un problema al cargar los productos',
            })
        })
    },

    getById(req, res) {
        Product.findByPk(req.params.id, {
          where: { id: req.params.id },
        }).then((product) => res.send(product))
      },

    getOneByName(req, res) {
        Product.findOne({
          where: {
            name: {
              [Op.like]: `%${req.params.name}%`,
            },
          },
          include: [Category],
        }).then((product) => res.send(product))
    },

    getByPrice(req, res) {
      Product.findOne({
        where: {
            price: {
             [Op.like]: `%${req.params.price}%`,
            },
          },
          include: [Category],
        }).then((product) => res.send(product))
        .catch((err) => res.status(500).send(err));
    },

      getByPriceDesc(req, res) {
        Product.findAll({include: [Category],
          order: [['name', 'DESC']]}        )
        .then((products) => res.send(products))
        .catch((err) => {
        console.log(err)
        res.status(500).send({
             message: 'Ha habido un problema al cargar los productos',
            })
        })
    },

      createtwo(req, res) {
        const { name, description, price, stock, id_category} = req.body;
        if (!name || !description || !price || !stock || !id_category) {
            return res.status(400).send('Error: Falta algún campo por rellenar');
        }
        req.body.role = 'product';
        Product.create(req.body)
            .then((product) =>
                res.status(201).send({ message: "Producto creado", product })
            )
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error al crear el producto');
            });
    }
}
     
module.exports = ProductController