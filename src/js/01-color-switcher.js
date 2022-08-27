const refs = {
  bodyTeg: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.startBtn.addEventListener('click', onDiscoStart);
refs.stopBtn.addEventListener('click', onDiscoStop);

function onDiscoStop() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function onDiscoStart() {
  intervalId = setInterval(setColorToStyle, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function setColorToStyle() {
  refs.bodyTeg.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
