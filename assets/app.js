<script type="text/javascript" src="https://.salesforce.com/canvas/sdk/js/44.0/canvas-all.js"/>
    // callback to access the OAuth access token and context object
    Sfdc.canvas(function() {
        // Save the token
        Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
        window.alert("hello, " + window.signedRequestJson.context.user.fullName);
          console.log("hello, " + window.signedRequestJson.context.user.fullName);
    });




document.getElementById('submitButton').addEventListener("click",function(){

  alert('Hello');
});
