const refs = {
  bodyTeg: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.startBtn.addEventListener('click', onDiscoStart);
refs.stopBtn.addEventListener('click', onDiscoStop);
refs.stopBtn.classList.toggle('is-hidden');
function onDiscoStop() {
  clearInterval(intervalId);
  changeClass();
}

function onDiscoStart() {
  intervalId = setInterval(setColorToStyle, 1000);
  changeClass();
}

function setColorToStyle() {
  refs.bodyTeg.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeClass() {
  refs.startBtn.classList.toggle("is-hidden");
  refs.stopBtn.classList.toggle('is-hidden');
}
