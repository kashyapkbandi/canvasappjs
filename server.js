const express = require('express');
const path = require('path');
const hbs = require('hbs'); 


var app = express();
const port = process.env.PORT || 3000;

// middleware
// __dirname - stores path to directory

app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views');

console.log(viewPath);
// tell express to use templates instead of views. 

app.set('views',viewPath);

app.get('',(req,res)=>{
res.render('index');
});


app.get('/page2',(req,res)=>{
res.render('page2');
});

app.set('view engine','hbs');




app.listen(port);
