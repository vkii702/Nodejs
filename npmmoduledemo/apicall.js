var http=require('http');
var str='';
http.get('',res=>{
    res.on('data',(user)=>{
        res.on('data',(user)=>{
            str=+user;

        });
    });
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(str);
    res.end();
}).listen(5050)