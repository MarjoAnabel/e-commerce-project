const express = require('express')
const app = express()
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => console.log (`Servidor levantado en el puerto ${PORT}`))

app.use ('/products', require ('./routes/products'))
app.use ('/categories', require ('./routes/categories'))
app.use ('/users', require ('./routes/users'))
app.use ('/orders', require ('./routes/orders'))
app.use ('/reviews', require ('./routes/reviews'))