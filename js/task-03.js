const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
  const inp = event.currentTarget.value;
  inp.length > 0 && inp[0] != ' ' ? span.textContent = inp.trim() : span.textContent = 'Anonymous';
});