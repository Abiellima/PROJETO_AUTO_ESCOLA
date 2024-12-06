let currentSlide = 0;

const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * 100;
    document.querySelector('.hero-carousel').style.transform = `translateX(${newTransformValue}%)`;
}
function toggleMenu() {
    // Aqui você pode adicionar a funcionalidade para abrir/fechar o menu
    alert('Menu aberto/fechado!');
}
// Menu responsivo
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        alert('Você clicou em um serviço!');
    });
});
