function toDecimal(input){

  var rev_input_array = input.toString().split("").reverse();
  var output = 0;

  rev_input_array.forEach(function(digit, index) {
      if(digit !== "0") {
        output += (Math.pow(2, index))
      }
  });
  return output;
}
