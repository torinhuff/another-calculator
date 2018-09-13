var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#calc1").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#addition1").val());
    var number2 = parseInt($("#addition2").val());
    var result = add(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc2").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtraction1").val());
    var number2 = parseInt($("#subtraction2").val());
    var result = subtract(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc3").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiplication1").val());
    var number2 = parseInt($("#multiplication2").val());
    var result = multiply(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc4").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#division1").val());
    var number2 = parseInt($("#division2").val());
    var result = divide(number1, number2);
    debugger;
    $("#output").text(result);
  });
});
