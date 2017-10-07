var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('index');
})
app.get('/me',function(req, res){
    res.render('idk');
})

//include DB;


var port =  process.env.PORT || 3000;
var ip = process.env.IP || null;

app.listen(port, ip, function(){ console.log('server online')})