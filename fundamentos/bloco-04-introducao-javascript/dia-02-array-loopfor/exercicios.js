let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maximum = numbers[0];
let minimum = numbers[0];
let impar = 0;
let myArray = [];
let multiply = [];

//exercicio 1
// for(let i = 0; i < numbers.length; i += 1) {
//  console.log(numbers[i]);
// }

//exercicio 2
// for(let i = 0; i < numbers.length; i += 1) {
//  soma += numbers[i];
// }
// console.log(soma);

//exercicio 3
//  for(let i = 0; i < numbers.length; i += 1) {
//    soma += numbers[i];
//    media = soma / numbers.length;
//  }
//  console.log(media);

//exercicio 4
//  for(let i = 0; i < numbers.length; i += 1) {
//    soma += numbers[i];
//    media = soma / numbers.length;
//  }
//  if (media > 20) {
//    console.log("valor maior que 20");
//  }
//  else {
//    console.log("valor menor ou igual a 20");
//  }

//exercicio 5
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > maximum) {
//      maximum = numbers[i];
//    }
//  }
//  console.log(maximum);

//exercicio 6
//  for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] % 2 != 0) {
//        impar += 1;
//      }
//  }
//  if (impar > 0) {
//    console.log(impar);
//  }
//  else {
//    console.log("nenhum valor ímpar encontrado");
// }

//exercicio 7
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] < minimum) {
//      minimum = numbers[i];
//    }
//  }
//console.log(minimum);

//exercicio 8
  for (let i = 1; i <= 25; i += 1) {
    myArray.push(i);
  }
  console.log(myArray);

//exercicio 9
  for (let index = 0; index < myArray.length; index += 1) {
    multiply.push(myArray[index]*2);
  }
  console.log(multiply);