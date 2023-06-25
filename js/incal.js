var first = document.getElementById("num1");
var second = document.getElementById("num2");
var one = (first.innerText = prompt("Enter 1st number"));
var two = (second.innerText = prompt("Enter 2nd number"));
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var ans = document.getElementById("ans");
var symbol = document.getElementById("operator");

// add function
add.addEventListener("click", function () {
  symbol.textContent = "+";
  answer = one + two;
  ans.innerText = answer;
});

// sub function
sub.addEventListener("click", function () {
  symbol.textContent = "-";
  answer = one - two;
  ans.innerText = answer;
});

// mul function
mul.addEventListener("click", function () {
  symbol.textContent = "*";
  answer = one * two;
  ans.innerText = answer;
});

// div function
div.addEventListener("click", function () {
  symbol.textContent = "*";
  answer = one / two;
  ans.innerText = answer;
});
