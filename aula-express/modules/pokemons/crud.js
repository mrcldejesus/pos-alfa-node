'use strict'
const controller = require('./controller');

const CRUD ={
	create: (req,res) => {
		let mod = req.body
		let cb = (err,data) => {			
			if (err) throw new Error(err)
			res.json(data)
		}
		controller.create(mod,cb);
	},

	find: (req,res) => {
		let query = {};
		controller.find(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},

	findOne: (req, res) => {
		let query = {_id:req.params.id};
		controller.findOne(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	
	update: (req,res)=> {
		let query = {_id:req.params.id};
		let mod = req.body
		controller.update(query, mod, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	
	remove: (req,res) => {
		let query = {_id:req.params.id};
		controller.remove(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	}
}

module.exports = CRUD;
