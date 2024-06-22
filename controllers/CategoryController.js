const { Category , Product, Sequelize} = require('../models/index.js')
const { Op } = Sequelize

const CategoryController = {
  create(req, res) {
  Category.create(req.body)
      .then((category) =>
      res.status(201).send({ message: 'Categoría creada con éxito', category })
      )
      .catch(console.error)
  },

 /*  getAll(req, res) {
    Category.findAll({ include: [Product] })
    .then((categories) => res.send(categories))
    .catch((err) => {
        console.log(err)
        res.status(500).send({
            message: 'Ha habido un problema al cargar las categorías',
        })
    })
  },  */
  getAll(req, res) {
    Category.findAll({
      include: {
        model: Product
      }
    })
    .then((categories) => res.send(categories))
    .catch((err) => {
      console.error('Error al cargar las categorías:', err);
      res.status(500).send({
        message: 'Ha habido un problema al cargar las categorías',
        error: err.message
      });
    });
  },
  
  getById(req, res) {
    Category.findByPk(req.params.id)
      .then((category) => {
        if (category) {
          res.send(category);
        } else {
          res.status(404).send({ message: 'Categoría no encontrada' });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Ha habido un problema al buscar la categoría',
          error: err.message
        })
      })
  },
  
  getOneByName(req, res) {
    Category.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
      include: [Product],
    }).then((category) => res.send(category))
  },

  async update(req, res) {
    try {
      await Category.update(req.body, {
        where: { id: req.params.id }
      })
      res.send('Categoría actualizada con éxito')
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'no ha sido posible actualizar la categoría' })
    }
  },
  
  async delete(req, res) {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.send('La categoría ha sido eliminada con éxito')
  }
}

module.exports = CategoryController