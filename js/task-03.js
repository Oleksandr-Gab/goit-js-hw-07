const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
  const inp = event.currentTarget.value;
  +inp != 0 && inp.length > 0 ? span.textContent = inp.trim() : span.textContent = 'Anonymous';
});