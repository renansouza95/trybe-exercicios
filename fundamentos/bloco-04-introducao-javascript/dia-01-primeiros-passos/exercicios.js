//exercicio 1
  const a = 5;
  const b = 10;
  const c = 11;

  // adição
  console.log(a + b)

  //subtração
  console.log(a - b)

  //multiplicação
  console.log(a * b)

  //divisão
  console.log(a / b)

  //módulo
  console.log(a % b)

//exercicio 2
  if (a > b) {
    console.log(a);
  }
 else if (a < b) {
    console.log(b);
 }
 else {
   console.log("error");
 }

 //exercicio 3
 if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else if (c > a && c > b) {
 console.log(c);
}
else {
  console.log("error");
}

//exercicio 4
const signal = -2;

if (signal > 0) {
  console.log("positive");
}
else if (signal < 0) {
  console.log("negative");
}
else {
  console.log("zero");
}

//exercicio 5
const ang1 = 45;
const ang2 = 45;
const ang3 = 90;

if (ang1 + ang2 + ang3 === 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
  console.log("true");
}
else {
  console.log("false");
}

//exercicio 6
let chess = 'rainha';
let chessLowCase = chess.toLowerCase();

if (chessLowCase === 'rei') {
  console.log("Uma casa para qualquer lado");
}
else if (chessLowCase === 'rainha') {
  console.log("N casas para qualquer lado");
}
else if (chessLowCase === 'torre') {
  console.log("N casas em linha reta");
}
else if (chessLowCase === 'bispo') {
  console.log("N casas em diagonal");
}
else if (chessLowCase === 'cavalo') {
  console.log("Movimento em L");
}
else if (chessLowCase === 'peão') {
  console.log("Uma casa para frente");
}
else {
  console.log("Tá em Nárnia patrão? Essa peça não existe!");
}

//exercicio 7
const nota = 75

if (nota >= 90 && nota <= 100) {
  console.log('A');
}
else if (nota >= 80 && nota < 90) {
  console.log('B');
}
else if (nota >= 70 && nota < 80) {
  console.log('C');
}
else if (nota >= 60 && nota < 70) {
  console.log('D');
}
else if (nota >= 50 && nota < 60) {
  console.log('E');
}
else if (nota >= 0 && nota < 50) {
  console.log('F');
}
else {
  console.log("Nota inválida");
}

//exercicio 8
const num1 = 8;
const num2 = 15;
const num3 = 27;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 ===0) {
  console.log('true');
}
else {
  console.log('false');
}

//exercicio 9
const num4 = 8;
const num5 = 14;
const num6 = 28;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
  console.log('true');
}
else {
  console.log('false');
}

//exercicio 10
const cost = 60;
const sale = 250;

if (cost >= 0 && sale >= 0) {
  let finalCost = cost + (cost * 0.2);
  let profit = sale - finalCost;
  console.log(profit);
}
else {
  console.log('Valor inválido')
}

//exercicio 11