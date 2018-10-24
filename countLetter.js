function countLetter(str){
  var str = str.split(" ").join("").toLowerCase();
  var frequency = 0;
  var counter = {};
  // var alphabet = [abcdefghijklmnopqrstuvwxyz];
  for (var letter of str) {
    counter[letter] = 0;
  }
  for (var ltt of str){
    counter[ltt] += 1;
  }
  return counter;
}


console.log(countLetter('Lighthousec in House'));
