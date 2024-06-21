const express = require('express')
const app = express()
app.use(express.json())

const PORT = 3000
//Decimos en que puerto levantamos el servidor
app.listen(PORT, () => console.log (`Servidor levantado en el puerto ${PORT}`))



app.use ('/products', require ('./routes/products'))
app.use ('/categories', require ('./routes/categories'))
app.use ('/orders', require ('./routes/orders'))
