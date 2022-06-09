var http = require('http')

var port = 4001

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
<<<<<<< HEAD
  response.end('Hello world test1 \n')
=======
  response.end('Hello world test 1 \n')
>>>>>>> 26b7a759f9590c7699b10e5a3fabae1ebbc544da
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
