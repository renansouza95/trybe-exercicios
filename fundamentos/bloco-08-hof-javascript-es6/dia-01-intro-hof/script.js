const newEmployees = () => {
  const employees = {
    id1: generateID('Pedro Guerra', getName('Pedro Guerra')), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateID('Luiza Drumond', getName('Luiza Drumond')), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateID('Carla Paiva', getName('Carla Paiva')), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const getName = (name) => {
  const newName = name.toLowerCase();
  return newName.replace(/ /g,"_");
};

const generateID = (name, getName) => ({
  nomeCompleto: name,
  email: `${getName}@trybe.com`,
});

console.log(newEmployees(generateID));

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const lottery = (chosenNum, callback) => {
  const randomNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  console.log(randomNum);
  return callback(chosenNum, randomNum);
};

const checkNum = (chosenNum, randomNum) => {
  if (chosenNum === randomNum) {
    return 'Parabéns, você ganhou!';
  }
  return 'Tente novamente';
};

console.log(lottery(1, checkNum));