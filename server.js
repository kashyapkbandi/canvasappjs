const express = require('express');

var app = express();
const port = process.env.PORT || 3000;
// middleware
// __dirname - stores path to directory
app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views')

// tell express to use templates instead of views. 
app.set('views',viewPath);

app.get('/',(req,res)=>{
  res.render('about',{title:'ABout Me !',author:'Kashyap Kalakbandi ',
  viewName:'index'  });
});

app.get('/page2',(req,res)=>{
  res.render('about',{title:'ABout Me !',author:'Kashyap Kalakbandi ',
  viewName:'index'  });
});

app.listen(port);
