import { animation } from "./anim";

window.onload = function () {
  animation();

  const numbers = [1, 2, 3];
  const doubles = numbers.map(number => number * 2);
  console.log(doubles);
}