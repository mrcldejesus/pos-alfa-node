require('./../../db/config.test')
const assert = require('assert');
const Controller = require('./controller')


describe('Pokemon Controller', ()=> {

	before ((done)=>{
		Controller.remove({}, (err, data)=>done())
	})

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
		})
	})

	describe('CREATE', () => {
		it('No create o retorno deve ser o mesmo objeto enviado, adicionando _id', (done) => {
			var mod = {
				name: 'teste',
				attack: 9001,
				defense: 8001
			}

			var callback = (err, data) => {
				//assert.equal(mod, data, 'Lista veio vazia')	
				assert.Equal('object', typeof data._id)
				done()
			}
			Controller.create(mod, callback)
		})
	})
})

//Routes -> crud -> controller -> model -> schema -> validation