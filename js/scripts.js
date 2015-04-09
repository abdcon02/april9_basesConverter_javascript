function toDecimal(input, base){

  var rev_input_array = input.toString().split("").reverse();
  var output = 0;
  var hex ={'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,
            "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 }

  rev_input_array.forEach(function(digit, index) {
      if(digit !== "0") {
        output += (Math.pow(parseInt(base), parseInt(index)) * parseInt(hex[digit]));
      }
  });
  return output;
}

$(document).ready(function() {
  $("#converter").submit(function(event) {

    var number = $("#number").val();
    var base = $("#base").val();

    var result = toDecimal(number, base);

    $("#base-output").text(base)
    $("#number-output").text(result);
    $("#return").show();

    event.preventDefault();
  });
});
