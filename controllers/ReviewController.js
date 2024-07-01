const {Review,User} = require('../models/index.js');


const ReviewController = {
    create(req, res) {
        Review.create(req.body)
            .then((review) =>
            res.status(201).send({ message: 'Reseña creada con éxito', review })
            )
            .catch(console.error)
        },

        getAll(req, res) {
            Review.findAll({include: [User]})
               .then((review) => res.send(review))
               .catch((err) => {
               console.log(err)
               res.status(500).send({
                    message: 'Ha habido un problema al cargar las reseñas',
                   })
               })
           },     
}

module.exports = ReviewController
