const express = require('express');
const path = require('path');
const hbs = require('hbs'); 
const decode = require('salesforce-signed-request');
const request = require('request');


var app = express();
const port = process.env.PORT || 3000;
var  consumerSecret = 'EF99C5BD9FA0D1B66625ABA2A10302960F36EF23EB5E8D0E6936E6FA6B06D5D0';

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
res.render('page2',{
  jsPath: __dirname+'/assets/app.js'
  
});
});

// Live agent chat page route

app.get('/liveagentchat',(req,res)=>{
  res.render('Liveagent_LACorp',{
    jsPath: __dirname+'/assets/app.js'
    
  });
  });
  
  // Get Endpoint

app.get('/getmock',(req,res)=>{
  res.send('getmock',{
        "Status":200,
        "Message": "You have successfully hit this endpoint"

  });
  });

// POST Mock

app.post('/postmock',(req,res)=>{
  console.log(req);
  });

  app.get('/canvas',(req,res)=>{
    res.render('canvas');
    });

  // POST endpoint for canvas app.
app.post('/signedrequest',(req,res)=>{

// You could save this information in the user session if needed
var signedRequest = decode(req.body.signed_request, consumerSecret),
context = signedRequest.context,
oauthToken = signedRequest.client.oauthToken,
instanceUrl = signedRequest.client.instanceUrl,

query = "SELECT Id, FirstName, LastName, Phone, Email FROM Contact WHERE Id = '" + context.environment.record.Id + "'",

contactRequest = {
  url: instanceUrl + '/services/data/v44.0/query?q=' + query,
  headers: {
      'Authorization': 'OAuth ' + oauthToken
  }
};

request(contactRequest, function(err, response, body) {
res.setHeader("Cache-Control", "public, max-age=31536000");
res.setHeader("Expires", new Date(Date.now() + 31536000).toUTCString());
res.render('canvas',{context: context});
});

    });

app.set('view engine','hbs');




app.listen(port);
