const myName = "Renan";
const birthCity = "Sao Paulo";
let birthYear = 1995;
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

const base = 5;
let height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2);

console.log(area);
console.log(perimeter);

const nota = 70;
if (nota >= 80) {
  console.log("Parabéns, você foi aprovado!");
}
else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
}
else {
  console.log("Você foi reprovado");
}

const currentHour = 15;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
else {
  message = "Vai dormir!";
}

console.log(message);

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "sábado" || weekDay === "domingo") {
  console.log("FINALMENTE, descando merecido UwU");
}
else {
  console.log("Tá em Nárnia, patrão? Esse dia não existe!");
}

let processoSeletivo = "reprovada";

switch (processoSeletivo) {
  case "aprovada":
    console.log("aprovada");
    break;
  case "lista":
    console.log("lista");
    break;
  case "reprovada":
     console.log("reprovada");
     break;
  default:
    console.log("não se aplica");
}