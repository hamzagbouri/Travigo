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
// Open Modal Function
function openModal(city) {
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    modal.style.display = 'block';
    modalTitle.innerText = 'Booking for ' + city;
}

// Close Modal Function
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside the modal
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Countdown Timer Function
function countdownTimer(destinationId, targetDate) {
    const countdownElement = document.getElementById(destinationId);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Travel date passed!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update every second
    setInterval(updateCountdown, 1000);
}

// Initialize countdown timers for each destination
window.onload = function() {
    countdownTimer('countdown-paris', '2024-12-31T00:00:00');
    countdownTimer('countdown-london', '2024-11-20T00:00:00');
    countdownTimer('countdown-machu-picchu', '2025-01-15T00:00:00');
    countdownTimer('countdown-dubai', '2024-10-30T00:00:00');
};
