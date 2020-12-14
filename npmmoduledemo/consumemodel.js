var currdate=require('./mydatemodule');
var http=require('http');

http.createServer(function(res,req)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("currentdate"+currdate.datemodule());
    res.End();
}).listen(5000)