'use strict'
const PokemonModel = require('./model')

const Controller = {
	create: (req, res) => {
		let mod = req.body
		PokemonModel.create(mod, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	find:(req, res) => {
		query = {};
		PokemonModel.find(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	findOne:(req,res) => {
		query = {_id:req.params.id};
		PokemonModel.findOne(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	update:(req, res) => {
		query = {_id:req.params.id};
		let mod = req.body
		PokemonModel.update(query, mod, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	remove:(req, res) => { 
		query = {_id:req.params.id};
		PokemonModel.remove(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	}
}
module.exports = Controller