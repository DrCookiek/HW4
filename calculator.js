alert("Give me 2 numbers you want to calculate!");
let a = Number(prompt("Give me the first number:"));
let b = Number(prompt("Give me the second number:"));
let c = prompt("Choose a value: \n (+ , - , * , /)  ");
if (c == "+") {
  alert(a + b);
} else if (c == "-") {
  alert(a - b);
} else if (c == "*") {
  alert(a * b);
} else if (c == "/") {
  alert(a / b);
}
