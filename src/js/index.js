/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let whoIndex = ["The elephant", "My abuelo", "Our tiger", "My sister"];
let whatIndex = [
  "ate my pizza",
  "peed my homework",
  "bit my hand",
  "broke my nails"
];
let whenIndex = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was playing"
];

function change() {
  elem.innerHTML =
    whoIndex[Math.floor(Math.random() * whoIndex.length)] +
    " " +
    whatIndex[Math.floor(Math.random() * whatIndex.length)] +
    " " +
    whenIndex[Math.floor(Math.random() * whenIndex.length)];
}
let elem = document.getElementById("excuse");
// setInterval(change, 1000);

document.getElementById("button").onclick = change;
