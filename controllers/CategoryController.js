const { Category , Product, Sequelize} = require('../models/index.js')
const { Op } = Sequelize

const CategoryController = {
  create(req, res) {
  Post.create(req.body)
      .then((category) =>
      res.status(201).send({ message: 'Categoría creada con éxito', category })
      )
      .catch(console.error)
  },

  getAll(req, res) {
    Category.findAll({ include: [Product] })
    .then((categories) => res.send(categories))
    .catch((err) => {
        console.log(err)
        res.status(500).send({
            message: 'Ha habido un problema al cargar las categorías',
        })
    })
  }, 
  
  getById(req, res) {
      Category.findByPk(req.params.id, {
        include: [{ model: Category, attributes: ['id'] }],
      }).then((post) => res.send(post))
  },

  getOneByName(req, res) {
    Category.findOne({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [User],
    }).then((post) => res.send(post))
  },

  // Endpoint para actualizar
  update(req,res){
    /* Category.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ['id'] }],
    }).then((post) => res.send(post)) */
  },

  async delete(req, res) {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.send('La categoría ha sido eliminada con éxito')
  }
}

module.exports = CategoryController