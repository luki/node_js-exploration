// Ignores the first two arguments
for (i = 2; i < process.argv.length ; i++) {
  printStringFromUrl(process.argv[i]);
}

function printStringFromUrl(url) {
  require('http').get(url, res => {
    var result = ""
    res.setEncoding('utf8');
    res.on('data', data => {
      result += data;
    });
    res.on('end', function() {
      console.log(result)
    })
  })
}
