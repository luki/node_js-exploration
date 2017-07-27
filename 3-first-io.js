console.log(
  require('fs')
    // Synchronous function
    .readFileSync(process.argv[2])
    .toString()
    .split("\n")
    .length - 1
);
