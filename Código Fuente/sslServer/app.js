const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('nodejs.pfx'),
  passphrase:'123abc.'
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);
