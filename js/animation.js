// JAVASCRIPT ANIMATION

/* var a = 0;
var ami = setInterval(function () {
  a += 1;
  if (a == 400) {
    var b = 600;
    document.getElementById("small").style.background = "green";
    document.getElementById("small").style.height = b + "px";
    document.getElementById("small").style.transition = "all 200ms linear";
    clearInterval(ami);
  } else {
    document.getElementById("small").style.height = a + "px";
    document.getElementById("small").style.transition = "all 200ms linear";
  }
}, 10); */

// ONE TIME ANIMATION

var sum = setTimeout(sumit, 1000);
var sumi = setTimeout(aniSumit, 4000);

function sumit() {
  document.getElementById("small").style.height = "400px";
  document.getElementById("small").style.background = "black";
  document.getElementById("small").style.transition = "3s";
}

function aniSumit() {
  document.getElementById("small").style.width = "400px";
  document.getElementById("small").style.background = "pink";
  document.getElementById("small").style.transition = "3s";
}
