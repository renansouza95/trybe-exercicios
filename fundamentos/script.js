// Desafio 1
// Desenvolva uma função que receba um array como parâmetro e retorne um array com os números pares
const arrayNum = [1,2,3,4,5,6,7,8,9,10];
function getEvenNumbers (arrayNum) {
  let arrayPares = [];
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] % 2 === 0) {
      arrayPares.push(arrayNum[i]);
    }
  }
  console.log(arrayPares);
}
getEvenNumbers(arrayNum);

// Desafio 2
// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

function buildCitiesArray(citiesAndStates) {
  let arrayResultado = [];
  let novaString = '';
  for (let i = 0; i < citiesAndStates.length; i += 1) {
    novaString = `${citiesAndStates[i].city} - ${citiesAndStates[i].state}`;
    arrayResultado.push(novaString);
  }
  console.log(arrayResultado);
}
buildCitiesArray(citiesAndStates);

// Desafio 3
// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que 18, falso caso contrário
function allGreaterThanEighteen(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 18) {
      return false;
    }
  }
  return true;
}
console.log(allGreaterThanEighteen([20, 30, 19, 40, 50]));

// Desafio 4
// Desenvolva uma função que recebe como primeiro parâmetro um array contendo objetos com cidades e estados
// Como segundo parâmetro ela recebe o nome de um estado
// A função deverá retornar o primeiro objeto que contenha a propriedade state igual ao nome do estado recebido por parâmetro 
const cidadesEstados = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Ponta Grossa',
    state: 'Paraná',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  },
  {
    city: 'Vitória da Conquista',
    state: 'Bahia',
  },
  {
    city: 'Curitiba',
    state: 'Paraná',
  },
]

function getCityByState(cidadesEstados, state) {
  for (let i = 0; i < cidadesEstados.length; i += 1) {
    if (cidadesEstados[i].state === state) {
      return cidadesEstados[i];
    }
  }
}
console.log(getCityByState(cidadesEstados, 'Paraná'));

// Desafio 5.1
// Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// array: [2, 3, 4, 6, 8, 12, 24]
// resultado esperado: 59
const myNum = [2, 3, 4, 6, 8, 12, 24];
function sumAllNumbers(myNum) {
  let soma = 0;
  for (let i = 0; i < myNum.length; i += 1) {
    soma += myNum[i];
  }
  console.log(soma);
}
sumAllNumbers(myNum);

// Desafio 5.2
// Faça uma nova função que some somente os números ímpares!
function sumOddNumbers(myNum) {
  let soma = 0;
  for (let i = 0; i < myNum.length; i += 1) {
    if (myNum[i] % 2 !== 0) {
      soma += myNum[i];
    }
  }
  console.log(soma);
}
sumOddNumbers(myNum);