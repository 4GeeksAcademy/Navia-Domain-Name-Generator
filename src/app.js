import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //write your code here
let pro = ["The", "our"];
let adj = ["big", "great"];
let noun = ["jogger", "racoon"];
let extension = ["com", "net"];

function randomElement(arr) {
  return arr[Math.round(Math.random() * arr.length)];
}

let sentence = `${randomElement(pro)} ${randomElement(adj)} ${randomElement(noun)} ${randomElement(extension)}`;
  console.log("start", sentence);

  const paraElement = document.getElementsByTagName("p");

  paraElement[0].innerText = sentence;
};






