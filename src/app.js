import "./style.css";
window.onload = function() {
  //write your code here
  var who = [
    "The dog ",
    "My grandma ",
    "The mailman ",
    "My bird ",
    "My Charmander "
  ];

  var action = ["ate ", "peed ", "crushed ", "broke ", "burned "];

  var what = ["my homework ", "my phone ", "the car ", "my house "];

  var when = [
    "before the class ",
    "when I was sleeping ",
    "while I was exercising ",
    "during my lunch ",
    "while I was praying ",
    "while I was studying"
  ];

  var exclamation = ["!!!!"];

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4] + exclamation;
};
