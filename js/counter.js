var ibtn = document.getElementById("increase");
var rbtn = document.getElementById("reset");
var dbtn = document.getElementById("decrease");
var no = document.getElementById("num");

var count = 1;

ibtn.addEventListener("click", function () {
  no.textContent = count++;
  no.style.color = "green";
});

rbtn.addEventListener("click", function () {
  count = 0;
  no.textContent = count;
  no.style.color = "black";
});

dbtn.addEventListener("click", function () {
  no.textContent = count--;
  no.style.color = "red";
});
