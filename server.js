var http=require('http');
const PORT = process.env.PORT || 5000
var serverFunc=function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello');
    res.end();
};
var server=http.createServer(serverFunc);
server.listen(PORT);