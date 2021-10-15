// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = () => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return userToReturn;
// };

// console.log(userFullName(getUser())); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(userNationality(getUser())); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(user);
  }, delay());
  return user;
};

setTimeout(() => getUser(userFullName(user)), 5000); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
setTimeout(() => getUser(userNationality(user)), 5000); // deve imprimir "Ivan is Russian" depois de um certo tempo