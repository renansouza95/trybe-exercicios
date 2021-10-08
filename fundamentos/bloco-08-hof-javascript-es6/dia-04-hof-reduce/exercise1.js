// 1 - Dada uma matriz, transforme em um array.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

 function flatten() {
  return arrays.reduce((acc, currentValue) => acc.concat((currentValue), []));
 }

console.log(flatten());
