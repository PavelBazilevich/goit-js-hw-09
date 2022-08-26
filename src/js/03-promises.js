import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const firstDelayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);



function submitForm(e) {
  e.preventDefault();
  const step = Number(stepEl.value);
  let delay = Number(firstDelayEl.value);
  const amountUser = Number(amountEl.value);
  for (let i = 1; i <= amountUser; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
    
  }
  
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
