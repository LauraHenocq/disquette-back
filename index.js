const express = require('express');
const cors = require('cors');

const host = 'localhost';
const port = 4000;

const app = express();
app.use(cors());
app.use(express.json())

const DisquetteService = require('./services/disquettes.js')

app.listen(port, host, () => {
  console.log(`Ecoute sur le port ${port}`)
})

app.get('/', (req, res) => {
  res.send("Bienvenue sur la page d\'acceuil de l\'API disquettes !")
})

app.get('/disquettes', (req, res) => {
  const disquettes = DisquetteService.getAll()

  res
    .status(200).json(disquettes)
    .end()
})

app.post('/disquettes', (req, res) => {
  const disquetteToAdd = req.body.disquette
  DisquetteService.add(disquetteToAdd)

  res
    .status(201)
    .end()
})
