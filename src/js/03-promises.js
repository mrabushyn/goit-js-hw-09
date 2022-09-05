import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const formDelay = document.querySelector('input[name="delay"]');
const formStep = document.querySelector('input[name="step"]');
const formAmount = document.querySelector('input[name="amount"]');

const createPromise = (position, firstDelay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, firstDelay });
      }
      reject({ position, firstDelay });
    }, firstDelay);
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  let firstDelay = Number(formDelay.value);
  let delayStep = Number(formStep.value);
  let amount = Number(formAmount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay).then(onSuccess).catch(onError);
    firstDelay += delayStep}

function onSuccess ({ position, firstDelay }) {
Notify.success(`Fulfilled promise ${position} in ${firstDelay} ms`);
}
function onError({ position, firstDelay }) {
  Notify.failure(`Rejected promise ${position} in ${firstDelay} ms`);
}

});


