const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#F34723',
  '#0095B6',
  '#FFCF48',
  '#A7FC00',
  'FFFF00',
  '00FF00',
];
const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

refs.stop.disabled = true;

function onStart() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = newColor(colors);
  }, 1000);

  isActive = true;

  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStop() {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(intervalId);
}

function newColor(colors) {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}
