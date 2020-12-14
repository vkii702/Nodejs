
var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'})
    res.end("vicky is back with boom")
}).listen(8080)