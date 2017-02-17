var https = require('https');
var fs = require('fs');

var options = {
  hostname:'desktop-l1fd9ca.na.local',
  port: 443,
  path: '/',
  method: 'GET',
  pfx: fs.readFileSync('Certificates/validclient.pfx'),  
  passphrase: '123abc.'
};

var req = https.request(options, function(res) {
console.log(res.statusCode);
res.on('data', function(d) {
  process.stdout.write(d);
  });
});

req.end()