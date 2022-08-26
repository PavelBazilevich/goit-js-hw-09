const pEl = document.body.firstElementChild;
const buttonStart = pEl.nextElementSibling;
const buttonStop = buttonStart.nextElementSibling;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', changeColor);
buttonStop.addEventListener('click', stopChangeColor);

function changeColor(e) {
  buttonStop.disabled = false;
  changeColorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
}

function stopChangeColor(e) {
  buttonStart.disabled = false;
  clearInterval(changeColorId);
  buttonStop.disabled = true;
}
