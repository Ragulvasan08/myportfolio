let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active'); 
}

// Typing Text Animation Code
const typed = new Typed('.multiple-text', {
    strings: ['Python Developer', 'Data Scientist', 'Backend Developer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });