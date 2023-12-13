function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener("click", () => {
  backgroundColor.style.background = getRandomHexColor();
  span.textContent = getRandomHexColor();
});
