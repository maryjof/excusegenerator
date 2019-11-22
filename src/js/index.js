/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#btn").addEventListener(click), () => {
  document.querySelector("#random-excuses").innerHTML = generateExcuse();
  };
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The elephant", "My abuelo", "Our tiger", "My sister"];
  let what = [
    "ate my pizza",
    "peed my homework",
    "bit my hand",
    "broke my nails"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex] + " " + ;
};
