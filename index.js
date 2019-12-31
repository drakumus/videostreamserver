const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res)
{
  res.writeHead(200, {'Content-Type': 'video/mp4'})
  var rs = fs.createReadStream('assets/use.mp4');
  rs.pipe(res);
  //res.send("HAHA!!");
});

app.listen(3000, function()
{
  console.log("The server is listening.")
})