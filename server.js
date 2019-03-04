

  const path = require('path');
  const express = require('express');
  var app = express();
  const port = process.env.PORT || 3000;
  // __dirname - stores path to directory
  app.use(express.static(path.join(__dirname,'/assets')));

  app.set('view engine','hbs');

//setting up route

app.get('',(req,res)=>{
res.render('index', {
title:'Weather App',
author:'Kashyap Kalakbandi'

})
});
  app.listen(3000,()=>{
  //  console.log(__dirname);
    console.log('Server is up on port 3000');

  });
