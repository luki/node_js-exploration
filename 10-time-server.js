let server = require('net').createServer(socket => {
  let st = require('strftime');
  let timestamp = st("%Y-%m-%d %H:%M\n", new Date());
  socket.end(timestamp);
});
server.listen(process.argv[2])
