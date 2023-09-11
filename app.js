// alternar header

let MenuBtn = document.getElementById('menuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// efecto de tipiado

let typed = new Typed('.auto-input',{
    strings: ['Desarrollador Full Stack!'],
    typeSdpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});