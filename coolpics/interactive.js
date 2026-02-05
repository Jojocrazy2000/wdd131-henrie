const btn = document.querySelector('.menu-btn');
const bar = document.querySelector('#links');
const img = document.getElementsByName("img");

const gallary = document.querySelector('#imgs');
const modal  = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

console.log(btn);
console.log(img);

btn.addEventListener('click', function() {
    console.log('button clicked');
    bar.classList.toggle('open');
});

gallary.addEventListener('click', function(e){
    console.log('image modal')
    // console.log(e.target, e.target.tagName);
    const select = e.target.closest('img');

    if (!select) return;

    modalImg.src = select.src;
    modal.showModal();
})

closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});