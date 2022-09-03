

// console.log(amount);




const firstDelay = document.querySelector("input[name=delay]")
const delayStep = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');



const BtnCreatePromise = document.querySelector('button[type=submit]');
console.log(BtnCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve('esssss' + " " + `${position}`);
      } else {
        reject('nooooo');
      }
    }, delay);
  });
}

function onSecces(result) {
  console.log(result);
}

function onError(error) {
  console.log("error");
  console.log(error);
}

BtnCreatePromise.addEventListener("submit", onSubmit)

function onSubmit(evt) {
  

  evt.preventDefault();
console.log(evt);
  const totalTime = (firstDelay.textContent + delayStep.textContent) * amount.textContent
  console.log(firstDelay.textContent);

  const intervalId = setInterval(() => {
    createPromise(2, firstDelay).then(onSecces).catch(onError);
  }, delayStep);

  clearInterval(intervalId);
}





// if (amount > 4) {

// }








// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('Errrrror');
//       }
//     }, 2000);
//   });
// };
//     console.log(Promise);

// fetchUserFromServer('Mango')
//   .then(o => console.log(o))
//   .catch(er => console.log(er));

// function onSecces (result) {
// console.log("Allright")
// }

// function onError (error) {
//   console.log("Error")
// }

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 3000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));
