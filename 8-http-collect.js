require('http').get(process.argv[2], res => {
  res.setEncoding("utf8");
  var result = "";
  res.on('data', data => {
    result += data;
  })
  res.on('end', function() {
    console.log(result.length);
    console.log(result)
  })
});
