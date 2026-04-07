// modulos externos
import express from 'express'

// modulos internos
import { somar, subtrair, multiplicar, dividir } from './calculadora/operacoes.js'
const app = express()

// url - index.js  |   operacoes.js
app.get('/somar/:n1/:n2', (req, res) => {
    let {n1, n2} = req.params
    let resposta = {
        resultado : somar(parseInt(n1), parseInt(n2))
    }
    res.json(resposta)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})