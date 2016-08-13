const http = require("http")

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/json; charset=utf8"})

  const url = request.url
  console.log('url', url)

  const listagem = [
  		{name: "Marcelo" age: 24},	
  		{name: "Joao" age: 30},
  		{name: "Maria" age: 40},
  		{name: "José" age: 60}
  	]

  switch(url){

  	case '/criar':
  	
  	response.write(JSON.strigify(listagem))
  	
  	break;
  	
  	case '/listar':

  	
  	
  	break;

  }


  response.end()
})
.listen(3000)
console.log('Server running at http://localhost:3000/')