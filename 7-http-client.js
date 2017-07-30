require('http').get(process.argv[2], res => {
  res.setEncoding('utf8');
  var data = [];
  res.on('data', chunk => {
    data.push(chunk);
  })
  res.on("end", function() {
    console.log(data.join("\n"));
  })
})
