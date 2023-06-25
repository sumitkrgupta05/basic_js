var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
var len = arr.length;

//BUTTON EVENT
btn.addEventListener("click", function () {
  var hex = "#";
  for (var a = 0; a < 6; a++) {
    hex += arr[randomNumber()];
  }
  document.getElementById("bg").style.background = hex;
  document.getElementById("spn").innerText = hex;
});

//RANDOM NUMBER
function randomNumber() {
  return Math.floor(Math.random() * len);
}
