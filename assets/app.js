
// const sfdc = require('sfdc');

document.getElementById('submitButton').addEventListener("click",function(e){

  console.log("Hello");
  e.preventDefault();
});

Sfdc.canvas(function() {
    // Save the token
    sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
    window.alert("hello, " + window.signedRequestJson.context.user.fullName);
});