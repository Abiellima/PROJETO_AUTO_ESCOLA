// Controle de Slides do Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    // Atualiza o índice do slide atual
    currentSlide += direction;

    // Garante que o índice fique dentro do intervalo válido
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Aplica a transição do carrossel
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.hero-carousel').style.transform = `translateX(${newTransformValue}%)`;
}

// Controle do Menu Responsivo
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}

// Interação com os Cards de Serviços
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        alert('Você clicou em um serviço!');
    });
});

// Inicialização do Mapa com Google Maps
function initMap() {
    const location = { lat: -3.0045386, lng: -59.9917778 }; // Coordenadas do local
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Nível de zoom do mapa
        center: location, // Centro do mapa
    });

    // Marcador no local especificado
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', function (event) {
        // Remova esta linha se ela estiver impedindo o redirecionamento:
        // event.preventDefault();

        // Certifique-se de que o atributo 'href' do link seja respeitado:
        console.log("Redirecionando para:", this.href);
    });
});


