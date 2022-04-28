// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP Methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Daniela1"}
    const explorer2 = {id: 2, name: "Daniela2"}
    const explorer3 = {id: 2, name: "Daniela3"}
    const explorer4 = {id: 2, name: "Daniela4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

