// name event
document.getElementById("fname").addEventListener("mouseenter", function () {
  document.getElementById("fname").style.background = "red";
});

document.getElementById("fname").addEventListener("mouseout", function () {
  document.getElementById("fname").style.background = "";
});

document.getElementById("fname").addEventListener("click", function () {
  document.getElementById("fname").style.background = "pink";
});

// title event
document.getElementById("lname").addEventListener("mouseenter", function () {
  document.getElementById("lname").style.background = "red";
});

document.getElementById("lname").addEventListener("mouseout", function () {
  document.getElementById("lname").style.background = "";
});

document.getElementById("lname").addEventListener("click", function () {
  document.getElementById("lname").style.background = "pink";
});

// Dark Mode
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("btn").innerText = "Normal Mode";
  document.getElementById("head").style.background = "black";
  document.getElementById("head").style.color = "white";
  document.getElementById("frm").style.background = "aqua";
  document.getElementById("frm").style.color = "black";
  document.getElementById("btn").classList.add("butn");
});

document.getElementsByIdName("btn").addEventListener("click", function () {
  document.getElementById("btn").classList.remove("butn");
});

// document.getElementById("btn").addEventListener("keypress", function () {
//   document.getElementById("head").style.background = "thistle";
//   document.getElementById("head").style.color = "rgba(245, 0, 0, 0.726)";
//   document.getElementById("frm").style.background = "yellow";
//   document.getElementById("frm").style.color = "rgb(245, 0, 163)";
//   document.getElementById("btn").innerText = "Dark Mode";
// });
