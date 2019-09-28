const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const faker = require('faker');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// server.js
// ... Code before
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

if(process.env.NODE_ENV === 'DEV') {
    // ... initial code block here
}

// Endpoint to generate access token
app.get('/token', function(request, response) {
   var identity = faker.name.findName();
    //console.log(request.query.accsid);
   // Create an access token which we will sign and return to the client,
   // containing the grant we just created
   var token = new AccessToken(
       request.query.accsid,
       request.query.apikey,
       request.query.secret
   );

   // Assign the generated identity to the token
   token.identity = identity;

   const grant = new VideoGrant();
   // Grant token access to the Video API features
   token.addGrant(grant);

   // Serialize the token to a JWT string and include it in a JSON response
   response.send({
       identity: identity,
       token: token.toJwt()
   });
});

app.listen(process.env.PORT || 8080);
// Code after ...
