var http=require('http');
const PORT = process.env.PORT || 5000;
var form=`<form action="upload" method="POST">
          <table>
          <tr>
          <td>Name:</td>
          <td><input type="text" placeholder:"fullname"></td>
          </tr>
          <tr>
          <td>Roll No:</td>
          <td><input type="text" placeholder:"engg roll no"></td>
          </tr>
          <tr>
          <td><input type="button" value="clear"></td>
          <td><input type="submit" value="submit"></td>
          </tr>
          </table>
          </form>`;
var serverFunc=function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url == '/upload') {
        res.write("Submitted Successfully! <br>");
    }
    res.write(form);
    res.end();
};

var server=http.createServer(serverFunc);
server.listen(PORT);
