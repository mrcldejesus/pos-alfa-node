const http = require("http")
require('./config')

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/json; charset=utf8"})

  const url = request.url
  console.log('url', url)
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const _schema = {
    name:  String,
    attack: Number,
    defense: Number
  }
  let query = {};

  const pokemonSchema = new Schema(_schema)
  const PokemonModel = mongoose.model('Pokemon', pokemonSchema)

  //const listagem = [
  //		{name: "Marcelo" age: 24},	
  //		{name: "Joao" age: 30},
  //		{name: "Maria" age: 40},
  //		{name: "José" age: 60}
  //	]

  switch(url){

  	case '/criar':
  	 
      PokemonModel.create({ name: 'Suissamon' }, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Inseriu:', data);
      
      });
      response.end();
  	//response.write(JSON.strigify(listagem))
  	
  	break;
  	
  	case '/listar':
      query = {};

      PokemonModel.find(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Buscou:', data);
      response.end(JSON.stringify(data));
      })
      
     // module.exports = PokemonModel
  	//response.write(JSON.strigify(listagem))
  	break;

  	case '/alterar':
      query = { name: /suissamon/i}
      const mod = {attack: 9001}

      const options = {
      multi: true,
      upsert: true
      }
      PokemonModel.update(query, mod, (err, data) => {
      if (err) return console.log('ERRO: ', err)
      return console.log('Buscou:', data)
    })

      response.end();
  	//response.write(JSON.strigify(listagem))
  	break;

  	case '/excluir':
      query = { name: /suissamon/i}
      PokemonModel.remove(query, (err, data) => {
      if (err) return console.log('ERRO: ', err)
      return console.log('Buscou:', data)
    
    })
      response.end();

  	//response.write(JSON.strigify(listagem))
  	break;
  }

})
.listen(3000)
console.log('Server running at http://localhost:3000/')