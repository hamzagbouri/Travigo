const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
const counters = document.querySelectorAll('.number');
const speed = 1000; // Change animation speed here

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-number');
        const data = +counter.innerText;

        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 10);
        } else {
            counter.innerText = value;
        }
    }
    
    animate();
});