const express = require('express');
const path = require('path');
const hbs = require('hbs'); 
const decode = require('salesforce-signed-request');
const request = require('request');
var xml = require('xml');
var bodyParser = require('body-parser')


var app = express();
const port = process.env.PORT || 3000;
var  consumerSecret = 'EF99C5BD9FA0D1B66625ABA2A10302960F36EF23EB5E8D0E6936E6FA6B06D5D0';

// middleware
// __dirname - stores path to directory

app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

console.log(viewPath);
// tell express to use templates instead of views. 

app.set('views',viewPath);



app.get('/opencti',(req,res)=>{
  res.render('openctipage');
  });
  
  
app.get('/elsite',(req,res)=>{
res.render('embeddedlogin');
});

app.get('/lookuppage',(req,res)=>{
  res.render('lookup');
  });
  




app.get('/webtoleadpage',(req,res)=>{
res.render('webtolead');
});



app.get('/callback',(req,res)=>{
  res.render('callback');
  });

  app.get('/setagentstatus',(req,res)=>{
    res.render('AgentStatusHandler');
    });
  

app.post('/callback',(req,res)=>{
res.render('callback');
});

app.get('/redirectionPage',(req,res)=>{

 
  // Move to a new location or you can do something else
res.redirect('https://lacorp-dev-ed.my.salesforce.com/apex/ReRouteTwo?accIdParam=0017F00002357mSQAQ&verified='+true);
 


});



app.get('',(req,res)=>{
res.render('index');
});

// Live agent chat page route

app.get('/liveagentchat',(req,res)=>{
res.render('Liveagent_LACorp',{
jsPath: __dirname+'/assets/app.js'

});
});


// snapin chat page route

app.get('/snapincasetest',(req,res)=>{
res.render('Snap23335950',{
jsPath: __dirname+'/assets/app.js'

});
});

// POST ENDPOINT TO RECEIVE THE PAYLOAD AND DISPLAY IT IN THE FORM

app.post('/poster',(req,res)=>{
  console.log('POSTER LOG----'+req.body);
  //res.send(req.body);
res.render('poster',{requestdata:req.body})


  });
  



// Interactionjs testing page

app.get('/interactionjs',(req,res)=>{
res.render('Interaction');
});


// Interactionjs testing page

app.get('/article',(req,res)=>{
  res.render('article');
  });
  
  
  app.get('/w2l',(req,res)=>{
    res.render('Web2Lead');
  });
  

//agents snap in testing page

app.get('/agenttest',(req,res)=>{
  res.render('AgentSnapinTestPage');
});

app.get('/devweb2lead',(req,res)=>{
  res.render('Web2LeadDevOrg');
});





// Get Endpoint

app.get('/getmock',(req,res)=>{
res.status(200).send({
"Status":200,
"Message": "You have successfully hit this endpoint"

});
});

// POST Mock

app.post('/postmock',(req,res)=>{
console.log(req);
res.set('Content-Type', 'text/xml');
res.send(xml('Request Success'));
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









// Mock bitcoin data for fetching
app.get('/mock-btc',(req,res)=>{
  res.status(200).send({
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "price": 9798.977911,
    "price_btc": 1,
    "market_cap": 180245643159,
    "percent_change_24h": 1.41,
    "percent_change_7d": -1.89,
    "percent_change_30d": 4.73,
    "volume_24h": 26140524526.52,
    "max_supply": "21000000",
    "asset_id": 1,
    "time": 1591315200,
    "open": 9801.616408,
    "high": 9806.977146,
    "low": 9801.616408,
    "volume": 353205420,
    "url_shares": 1135,
    "unique_url_shares": 659,
    "reddit_posts": 1,
    "reddit_posts_score": 1,
    "reddit_comments": 1,
    "reddit_comments_score": 1,
    "tweets": 3758,
    "tweet_spam": 338,
    "tweet_followers": 14174661,
    "tweet_quotes": 11,
    "tweet_retweets": 338,
    "tweet_replies": 110,
    "tweet_favorites": 551,
    "tweet_sentiment1": 85,
    "tweet_sentiment2": 206,
    "tweet_sentiment3": 685,
    "tweet_sentiment4": 2564,
    "tweet_sentiment5": 218,
    "tweet_sentiment_impact1": 181592,
    "tweet_sentiment_impact2": 1455907,
    "tweet_sentiment_impact3": 3225871,
    "tweet_sentiment_impact4": 8750266,
    "tweet_sentiment_impact5": 562035,
    "social_score": 14176806,
    "average_sentiment": 3.7,
    "sentiment_absolute": 3,
    "sentiment_relative": 91,
    "news": 47,
    "price_score": 3,
    "social_impact_score": 4.3,
    "correlation_rank": 4.1,
    "galaxy_score": 75.5,
    "volatility": 0.01008901,
    "alt_rank": 26,
    "alt_rank_30d": 1,
    "market_cap_rank": 1,
    "percent_change_24h_rank": 657,
    "volume_24h_rank": 2,
    "social_volume_24h_rank": 1,
    "social_score_24h_rank": 1,
    "youtube": 47,
    "social_contributors": 1963,
    "social_volume": 4466,
    "social_volume_global": 7118,
    "social_dominance": 62.74234335487496,
    "market_cap_global": 278814602122,
    "market_dominance": 64.55374708002002,
    "medium": 1,
})
})






app.set('view engine','hbs');




app.listen(port);
