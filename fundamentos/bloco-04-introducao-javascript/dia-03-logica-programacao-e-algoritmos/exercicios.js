//exercicio 1
let n = 5;
let simbolo = "*";
let linha = "";

//criar um laço de repetição para adicionar os asteriscos até n

for(let i = 0; i < n; i += 1) {
  linha = linha + simbolo;
}
//for para imprimir a linha n vezes
for(let j = 1; j <= n; j += 1) {
  linha.push(j);
  console.log(linha);
}
