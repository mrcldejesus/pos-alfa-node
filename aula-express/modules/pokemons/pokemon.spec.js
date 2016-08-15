require('./../../db/config.test')
const assert = require('assert');
const Controller = require('./controller')

describe('Pokemon Controller', () => {
	before((done) => {
		Controller.remove({}, (err, data) => done())
	});

	var msg1 = 'Quando iniciamos sem pokemons a lista deve vir vazia'
	describe(msg1, () => {
		it('Deve retornar array vazio', (done) => {
			var query = {}
			var callback = (err, data) => {
				console.log('data', data)
				assert.equal(null, err,  'Erro não é nulo')
				assert.equal(0, data.length,  'Lista não veio vazia')
				done()
			}
			Controller.find(query, callback)
		});
	});

	describe(msg1, () => {
		it('Deve retornar array vazio', (done) => {
			var query = {name:'Marcelo'}
			var callback = (err, data) => {
				console.log('data', data)
				assert.equal(null, err,  'Erro não é nulo')
				assert.equal(0, data.length,  'Lista não veio vazia')
				done()
			}
			Controller.findOne(query, callback)
		});
	});

	describe('MENSAGEM CREATE', (done) => {
		it('No create o retorno deve ser o mesmo objeto enviado, adicionando _id', (done) => {
			var mod = {
				name: 'Novo',
				attack: 8000,
				defense: 9000
			}
			var callback = (err, data) => {
				assert.notEqual(undefined,data._id)
				assert.Equal('object', typeof data._id)
				done()
			}
			Controller.create(mod, callback);
		});
	});

	describe('MENSAGEM DELETAR',()=>{
		it('Quando deletar {"ok":1,"n":1}', (done)=>{
			var query = {}
			var callback = (err,data) => {
				assert.equal(1, data.ok)
				assert.equal(true, (data.n>0))
				done()
			}
			Controller.remove(qry,callback);
		});
	});

	describe('MENSAGEM UPDATE',()=>{
		it('Deve retornar um objeto', (done)=>{
			var query = {name:'NOVO NOME'}
			var callback = (err,data) => {
				assert.equal(null,err,'Não é nulo')
				assert.equal(0,data.length,'Lista não veio vazia...')
				done()
			}
			Controller.update(query,callback);
		});
	}); 
})

//Routes -> crud -> controller -> model -> schema -> validation
