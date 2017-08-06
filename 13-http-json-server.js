// http server x
// json data x
// get request x
// path /api/parsetime x
// key: Ignores
// ios-format time as values x

// second /api/unixtime x
// return unix epoch time in MILLISECONDS
// listen to port retrieved by first argument x

require('http').createServer((req, res) => {
  const parsedUrl = require('url').parse(req.url, true);

  var time = (function(url) {
    switch(url) {
      case '/api/parsetime':
        return toParsetime(new Date(parsedUrl.query.iso));
        // console.log(toParsetime(new Date(parsedUrl.query.iso)));
      case '/api/unixtime':
        return toUnixtime(new Date(parsedUrl.query.iso));
    }
  })(parsedUrl["pathname"]);

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(time));
}).listen(process.argv[2]);

// First endpoint conversion
function toParsetime(date) {
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  }
}

// Second endpoint conversion
function toUnixtime(date) {
  return {
    'unixtime': date.getTime()
  }
}
