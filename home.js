const slides = document.querySelectorAll('.slide');
let atual = 0;

setInterval(() => {
    slides[atual].classList.remove('ativo');
    atual = (atual + 1) % slides.length;
    slides[atual].classList.add('ativo');
}, 4000);