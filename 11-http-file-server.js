let server = require('http').createServer((req, res) => {
  let readStream = require('fs').createReadStream(process.argv[3]);
  readStream.on('open', function() {
    readStream.pipe(res)
  });
});
server.listen(process.argv[2]);
