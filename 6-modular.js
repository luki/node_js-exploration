var md = require('./mod-asynchr-ext-filter.js');
md(process.argv[2], process.argv[3], (err, files) => {
  files.forEach(file => {
    console.log(file)
  })
})
