const item = document.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);

item.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.querySelectorAll('li').length}`);
    return;
})