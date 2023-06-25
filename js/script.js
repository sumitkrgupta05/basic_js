// user input
// var userInput = prompt("Enter user name:");
// alert("Hello " + userInput + "! You are welcome here :-)");

// date and time
var d = new Date();
document.getElementById("dd").innerText = d;

//dom manipulation [get method]
// innerHTML

// var nam = document.getElementById("main").innerHTML;
// console.log(nam);

//innertext

// var txt = document.getElementById("mid").innerText;
// console.log(txt);

// getAttribute

// var atr = document.getElementById("main").getAttribute("class");
// console.log(atr);

// var atr = document.getElementById("main").getAttributeNode("class");
// console.log(atr);

// [dom set method]
// innerText

// document.getElementById("head").innerText = "Amit";

//innerHTML

// document.getElementById("head").innerHTML = "<b><u>Sumit</u></b>";

// document.getElementById("fb").innerHTML = "<em>meta</em>";

//setAttribute

// document.getElementById("main").setAttribute("style", "background-color:green");

// document.getElementById("main").setAttribute("id", "last");

// removeAttribute

// document.getElementById("main").removeAttribute("id");

// querySelector [css selector]

// document.querySelector("#head").innerText = "Sumit";
// document.querySelector("#head").innerHTML = "<h6>Amit</h6>";

// css styling method
//style method
//style ->get
// var getStyle = document.querySelector("#main").style.border;
// console.log(getStyle);

//style ->set
// document.querySelector("#head").style.color = "yellow";
// document.querySelector("#head").style.backgroundColor = "pink";

//assign value using HTML dom

// document.getElementById("main").onclick = abc;
// function abc() {
//   document.getElementById("main").style.background = "violet";
//   document.getElementById("head").style.color = "blue";
//   document.getElementById("mid").style.fontFamily = "cursive"; //camelCase style
// }

//addEventListener {no on in onclick}

// document.getElementById("main").addEventListener("click", xyz);
// function xyz() {
//   document.getElementById("main").style.background = "black";
//   document.getElementById("main").style.border = "5px dotted white";
// }

// document.getElementById("main").addEventListener("mouseenter", function () {
//   document.getElementById("main").style.background = "blue";
//   document.getElementById("main").style.border = "5px solid yellow";
//   this.style.border = "5px solid red";
// });

//removeEventListener

// document.getElementById("main").addEventListener("click", xyz);
// function xyz() {
//   document.getElementById("main").removeEventListener("click", xyz);
// }

//classList

// add function
// document.querySelector(".header").addEventListener("click", abc);
// function abc() {
//   document.getElementById("main").classList.add("xyz", "efg");

//   var a = document.getElementById("main").classList;
//   console.log(a);
// }

//remove function
// document.querySelector(".header").addEventListener("click", abc);
// function abc() {
//   document.getElementById("main").classList.remove("mainhead");
// }

//toogle function
document.getElementById("main").addEventListener("click", tog);
function tog() {
  document.getElementById("main").classList.toggle("xyz");
}

//length function
// var len = document.getElementById("main").classList.length;
// console.log(len);

//dom traversal method

//parentNode <i>

// var a = document.getElementById("foot").parentElement;
// console.log(a); //get method

// document.getElementById("head").parentElement.style.background = "violet"; //set method

// children <ii>

// var a = document.getElementById("mid fruit").children;
// console.log(a); get method

// document.getElementsById("mid fruit").children[0].style.background = "red"; set method

// firstElementChild/lastElementChild   <iii>

// var a = document.getElementById("frt").firstElementChild;
// console.log(a);
document.getElementById("frt").firstElementChild.style.background = "red";

// var a = document.getElementById("frt").lastElementChild;
// console.log(a);
document.getElementById("frt").lastElementChild.style.background = "green";

// nextElementSibling/ previousElementSibling <iv>

// var a = document.getElementById("ap").nextElementSibling;
// console.log(a);
document.getElementById("ap").nextElementSibling.style.background = "yellow";

// var a = document.getElementById("ec").previousElementSibling;
// console.log(a);
document.getElementById("ec").previousElementSibling.style.background =
  "violet";

//dom create method

//createElement

// var newElement = document.createElement("h2");
// console.log(newElement);

//createTextNode

// var newTxt = document.createTextNode("this is a list heading");
// console.log(newTxt);

//createComment

// var newComment = document.createComment("this is a comment");
// console.log(newComment);

//appendChild method [add tag and text]

// newElement.appendChild(newTxt);
// var join = document.getElementById("item").appendChild(newElement);
// console.log(join);

// insertBefore

// var target = document.getElementById("frt");
// target.insertBefore(newElement, target.childNodes[0]);

//dom insertAdjacent method

//  <i>insertAdjacentHTML

// var target = document.getElementById("box");
// var newElement = "<h2>flex box</h2>";
// target.insertAdjacentHTML("afterbegin", newElement);

//  <ii>insertAdjacentText

// var target = document.getElementById("frt");
// var newTxt = "this is a test message";
// target.insertAdjacentText("afterbegin", newTxt);

//  <iii>insertAdjacentElement

// var newEl = document.createElement("h2");
// var newTxt = document.createTextNode("this is a Adjacent element");
// newEl.appendChild(newTxt);
// var target = document.getElementById("frt");
// target.insertAdjacentElement("afterbegin", newEl);

//Event

// box a
document
  .getElementById("mini-box1")
  .addEventListener("mouseenter", function () {
    document.getElementById("mini-box1").innerText = "click me :-) ";
    document.getElementById("mini-box1").style.borderRadius = "100px";
    document.getElementById("mini-box1").style.border = "10px double red";
    document.getElementById("mini-box1").style.transition = "1s";
  });

document.getElementById("mini-box1").addEventListener("mouseout", function () {
  document.getElementById("mini-box1").style.borderRadius = "0px";
  document.getElementById("mini-box1").style.border = "6px dashed black";
});

document.getElementById("mini-box1").addEventListener("click", function () {
  document.getElementById("mini-box1").style.background = "yellow";
  document.getElementById("mini-box1").innerText = "click event";
});

// box b
document
  .getElementById("mini-box2")
  .addEventListener("mouseenter", function () {
    document.getElementById("mini-box2").innerText = "double click me :-) ";
  });

document.getElementById("mini-box2").addEventListener("dblclick", function () {
  document.getElementById("mini-box2").style.background = "green";
  document.getElementById("mini-box2").innerText = "double clicking event";
});

// box c

document
  .getElementById("mini-box3")
  .addEventListener("mouseenter", function () {
    document.getElementById("mini-box3").style.background = "red";
    document.getElementById("mini-box3").innerText = "mouse hover event";
  });

// box d
document.getElementById("mini-box4").addEventListener("mouseout", function () {
  document.getElementById("mini-box4").style.background = "grey";
  document.getElementById("mini-box4").innerText = "mouse out event";
});

// box e
document
  .getElementById("mini-box5")
  .addEventListener("mouseenter", function () {
    document.getElementById("mini-box5").innerText = "right click me :-) ";
  });

document
  .getElementById("mini-box5")
  .addEventListener("contextmenu", function () {
    document.getElementById("mini-box5").style.background = "crimson";
    document.getElementById("mini-box5").innerText = "on right click";
  });

// form event
