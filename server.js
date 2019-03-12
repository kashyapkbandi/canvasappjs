const express = require('express');
const path = require('path');
const hbs = require('hbs'); 


var app = express();
const port = process.env.PORT || 3000;
// middleware
// __dirname - stores path to directory
app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views')

// tell express to use templates instead of views. 
app.set('views',viewPath);

app.get('',(req,res)=>{
res.render('index',{viewName:'page2'  });
});

app.get('/page2',(req,res)=>{
res.render('page2',{viewName:'index'  });
});
app.set('view engine','hbs');

app.listen(port, ()=>{
  console.log('Server is up and Running on port 3000');
});
