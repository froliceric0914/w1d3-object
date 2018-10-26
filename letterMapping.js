var str = process.argv[2];

function countLetter(str){
  var str = str.split(" ").join("").toLowerCase();
  var counter = {};
   for (var letter of str) {
    counter[letter] = [];
    var j = 0; //????
  }
  for (var letter of str) {
    counter[letter].push(j);
    j++;
  }
  return counter;
}

console.log(countLetter(str));



