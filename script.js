"use strict";
// function to display value
const display = function (val) {
  document.getElementById("result").value += val;
};

const myFunction = function (event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  )
    document.getElementById("result").value += event.key;
};

const calculator = document.getElementById("calculator");
calculator.onkeyup = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let r = document.getElementById("result").value;
    console.log(r);
    solution();
  }
};

//function to evaluate the inputs and return the results

const solution = function () {
  let entry = document.getElementById("result").value;
  let y = math.evaluate(entry);
  document.getElementById("result").value = y;
};

// Function that clear the display
const clr = function () {
  document.getElementById("result").value = "";
};
