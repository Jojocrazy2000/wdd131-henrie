const btn = document.querySelector('.menu-btn');
const bar = document.querySelector('.links');

console.log(btn);

btn.addEventListener('click', function() {
    console.log('button clicked');
    btn.classList.toggle('open');
    bar.classList.toggle('open');

});

