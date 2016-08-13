const assert = require('assert');
const Controller = require('./../controller')


describle('Pokemon Controller', ()=>){
	var msg1 = 'Quando iniciamos sem pokemons a lista deve vir vazia'
	describle(msg1, () => {
		it('Deve retornar array vazio', () => {
			var query = {}
			var callback = (err, data) => {
				assert.equal([], data, 'Lista veio vazia')
			}
			Controller.find(query, callback)
		})
	})

	describle('CREATE', () => {
		it('No create o retorno deve ser o mesmo objeto enviado, adicionando _id', () => {
			var mod = {
				name: 'teste',
				attack: 9001,
				defense: 8001
			}

			var callback = (err, data) => {
				//assert.equal(mod, data, 'Lista veio vazia')	
				assert.notEqual(undefined, data._id)
			}
			Controller.create(mod, callback)
		})
	})
})