// argv 2 is directory
// argv 3 is file extension

require('fs').readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  files.forEach(function(word){
    let split = word.split(".");
    switch (split.length) {
      case 1:
        break;
      default:
        if (split[1] == process.argv[3]) {
          console.log(word)
        }
    }
  })
});
