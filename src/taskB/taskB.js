let num1 = 1;
let num2 = 20;

let num3 = ride(num2, num1);

let num4 = ride(num3, num2);

let num5 = ride(num4, num3);

function ride(num1, num2) {
  return num1 * num2;
}
