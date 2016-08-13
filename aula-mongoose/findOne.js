require('./config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String,
  attack: Number,
  defense: Number
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = {_id: '57a608d4d01e48900322aab5'};

PokemonModel.findOne(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
module.exports = PokemonModel