const pEl = document.body.firstElementChild;
const buttonStart = pEl.nextElementSibling;
const buttonStop = buttonStart.nextElementSibling;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStop.disabled = true;

const getInterval = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
const stopInterval = () => {
  clearInterval(timerId);
};
const changeColor = e => {
  buttonStop.disabled = false;
  getInterval();
  buttonStart.disabled = true;
};

const stopChangeColor = e => {
  buttonStart.disabled = false;
  stopInterval();
  buttonStop.disabled = true;
};

buttonStart.addEventListener('click', changeColor);
buttonStop.addEventListener('click', stopChangeColor);
