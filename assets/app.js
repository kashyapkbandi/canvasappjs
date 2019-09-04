//document.getElementById('submitButton').addEventListener('click',handleclick);



function onLogin(identity) {

var targetDiv = document.querySelector(SFIDWidget.config.target);	

var avatar = document.createElement('a'); 
avatar.href = "javascript:showIdentityOverlay();";


var img = document.createElement('img'); 
img.src = identity.photos.thumbnail; 
img.className = "sfid-avatar";

var username = document.createElement('span'); 
username.innerHTML = identity.username;
username.className = "sfid-avatar-name";

var iddiv = document.createElement('div'); 
iddiv.id = "sfid-identity";

avatar.appendChild(img);
avatar.appendChild(username);
iddiv.appendChild(avatar);		

targetDiv.innerHTML = '';
targetDiv.appendChild(iddiv);	


}