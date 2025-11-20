const mobileBtn = document.querySelector('.mobile-menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');
const navLinks = document.querySelectorAll('.nav-link');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    navWrapper.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        navWrapper.classList.remove('active');
    });
});