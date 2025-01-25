var http = require('http')

var port = 8080

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello from v4 \n')
})

// Change 'localhost' to '0.0.0.0'
server.listen(port, '0.0.0.0', function () {
  console.log('Server running at http://0.0.0.0:' + port)
})
