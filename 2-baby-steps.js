let result = 0;
var index = 0;

process.argv.forEach(function(item){
  // console.log("Index is: " + index);
  switch (index) {

    // Unnecessary environment values
    // No way to check on both in one case
    case 0:
      break;
    case 1:
      break;

    // All other cases are of use
    default:
      result += parseInt(item);
      // console.log("Number " + index + " is " + item)
      break;
  }
  index += 1
});

console.log(result)
