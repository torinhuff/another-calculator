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
  event.preventDefault();
  $("form#calc").submit(function(event) {
    var number1 = parseInt($("#calc1").val());
    var number2 = parseInt($("#calc2").val());
    var result = add(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc").submit(function(event) {
    var number1 = parseInt($("#calc1").val());
    var number2 = parseInt($("#calc2").val());
    var result = subtract(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc").submit(function(event) {
    var number1 = parseInt($("#calc1").val());
    var number2 = parseInt($("#calc2").val());
    var result = multiply(number1, number2);
    debugger;
    $("#output").text(result);
  });

  $("form#calc").submit(function(event) {
    var number1 = parseInt($("#calc1").val());
    var number2 = parseInt($("#calc2").val());
    var result = divide(number1, number2);
    debugger;
    $("#output").text(result);
  });
});
