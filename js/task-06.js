function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector('#controls')
const inputNam = document.querySelector('input');
const btnCreate = document.querySelector("[data-create]");
const btnDestro = document.querySelector("[data-destroy]");
const boxes = document.querySelector('#boxes');

control.style.backgroundColor = '#F6F6FE';
control.style.padding = '32px';
control.style.display = 'flex';
control.style.gap = '16px';

inputNam.style.borderRadius = '8px';
inputNam.style.border = '5px';

boxes.style.display = 'flex';
boxes.style.gap = '16px';
boxes.style.flexWrap = 'wrap';
boxes.style.marginTop = '16px';
boxes.style.padding = '32px';
boxes.style.backgroundColor = '#F6F6FE';

btnCreate.style.backgroundColor = '#4E75FF';
btnCreate.style.color = '#FFFFFF';
btnCreate.style.padding = '8px 16px';
btnCreate.style.border = '0';
btnCreate.style.borderRadius = '8px';

btnDestro.style.backgroundColor = '#FF4E4E';
btnDestro.style.color = '#FFFFFF';
btnDestro.style.padding = '8px 16px';
btnDestro.style.border = '0';
btnDestro.style.borderRadius = '8px';

btnCreate.addEventListener('mousedown', () => {
  btnCreate.style.transform = 'scale(95%)'
});
  btnCreate.addEventListener('mouseup', () => {
    btnCreate.style.transform = 'scale(100%)';
})

btnDestro.addEventListener('mousedown', () => {
  btnDestro.style.transform = 'scale(95%)'
});
btnDestro.addEventListener('mouseup', () => {
  btnDestro.style.transform = 'scale(100%)';
})

const destroBoxes = () => {
  boxes.innerHTML = "";
}

const createBoxes = (amount) => {
  let boxs = [];
  let size = 30;
  
  for (let index = 0; index < amount; index++) {
    const box = `<div  style = 'width:${size}px; height:${size}px; background-color:${getRandomHexColor()}' ></div>`;
    size += 10;
    boxs.push(box);
  }
  boxes.innerHTML = boxs.join('');
};

btnCreate.addEventListener("click", () => {
    const amount = inputNam.value;
    amount > 0 && amount <= 100 ? createBoxes(amount) : alert ('The number must be between 1 and 100!');
    inputNam.value = '';
})

btnDestro.addEventListener("click", destroBoxes);






