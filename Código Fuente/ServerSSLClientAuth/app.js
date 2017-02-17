const https = require('https');
const fs = require('fs');
const express = require ('express');
const constants = require('constants');

const options = {
  secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1, 
  pfx: fs.readFileSync('Certificates/ssl.pfx'),
  passphrase:'123abc.',
  requestCert: true,
  rejectUnauthorized: false
};
var app = express();
var server = https.createServer(options,app).listen(443,function(){
   console.log("Express server listening on port: "+ 443);
console.log(app.settings.env);
   });
app.get('/',function (req,res){
   if ( req.client.authorized)
   {
     res.writeHead(200);
     res.end(fs.readFileSync(__dirname+'/views'+'/authorized.html'));
     console.log("authorized");
   }
   else
   {
     res.writeHead(403);
     res.end("");
     console.log("unauthorized");
   }
});


