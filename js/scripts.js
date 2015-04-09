function toDecimal(input, base){

  var rev_input_array = input.toString().split("").reverse();
  var output = 0;

  rev_input_array.forEach(function(digit, index) {
      if(digit !== "0") {
        output += (Math.pow(parseInt(base), parseInt(index)) * parseInt(digit));
      }
  });
  return output;
}
