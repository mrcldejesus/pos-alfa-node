const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const _schema = {
    name:  String,
    attack: Number,
    defense: Number
  }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Listagem de usuarios');
});

query = {};

      PokemonModel.find(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Buscou:', data);
      response.end(JSON.stringify(data));
      })

router.get('/:id', ())



router.put('/:id', (req, res, next) =>{
	query = {_id: req.params.id}

	PokemonModel.update(query, mod, function (err, data)  {
      if (err) throw new Error(err)
      res.json(data)
    })
}

router.delete('/:id', (req, res, next) =>{
	query = {_id: req.params.id}

	PokemonModel.delete(query, mod, function (err, data)  {
      if (err) throw new Error(err)
      res.json(data)
    })
}

	
module.exports = router;
