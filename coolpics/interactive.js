const btn = document.querySelector('.menu-btn');
const bar = document.querySelector('#links');
const img = document.getElementsByName("img");

console.log(btn);
console.log(img);

btn.addEventListener('click', function() {
    console.log('button clicked');
    bar.classList.toggle('open');

});

img.addEventListener('click', function(){
    console.log('image enchance')
    
})
