const express = require('express');
const app = express()
const port = 5678
const localName = '127.0.0.1'

app.get('/', function(req,res){
  res.render('index.ejs')
})


app.listen(port, localName, function(){
  console.log("Server Up");
})
