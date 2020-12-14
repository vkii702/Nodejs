var http=require('http');
http.createServer(function(req,res)
{
    var a=10;
    var b=20;
    res.writeHead(200,{'content-type':'text/html'})
    res.write("hello from server");
    res.write(a+b);
    res.end;
}).listen(8080)