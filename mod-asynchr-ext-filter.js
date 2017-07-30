module.exports = function (dir, ext, callback) {
  require('fs').readdir(dir, (err, files) => {
    if (err) {
      callback(err)
    } else {
      callback(null, files.filter(file => fileExtensionMatches(file, ext)))
    }
  })
}

function fileExtensionMatches(file, ext) {
  return file.split(".")[1] === ext
}
