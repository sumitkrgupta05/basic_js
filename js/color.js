var arr = [
  "red",
  "blue",
  "green",
  "pink",
  "yellow",
  "orange",
  "black",
  "grey",
  "white",
  "aqua",
  "aquamarine",
  "blueviolet",
  "coral",
  "chocolate",
];
var btn = document.getElementById("btn");
var len = arr.length;
btn.addEventListener("click", function () {
  for (var i = 0; i < len; i++) {
    var clr = arr[randomNumber()];
    // console.log(randomNumber());
  }
  document.getElementById("bg").style.background = clr;
  document.getElementById("spn").innerText = clr;
});

function randomNumber() {
  return Math.floor(Math.random() * len);
}
// console.log(randomNumber());
