const closeburger = document.querySelector('.close-burger');
const burgericon = document.querySelector('.burger');
const burgermenu = document.querySelector('#burgermenu');

burgericon.addEventListener('click', function(event) {
    burgermenu.classList.add("open");
});

closeburger.addEventListener('click', function(event) {
    burgermenu.classList.remove("open");
})