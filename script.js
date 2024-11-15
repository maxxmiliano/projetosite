/*let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

nextButton.onclick = () => {
    console.log("botao next")
}

prevButton.onclick = () => {
    console.log("botao prev")
}*/

/*let currentIndex = 0;
let items = document.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.indicators ul li');
let carrosMenu = document.getElementById('carros-menu');
let carGallerySection = document.getElementById('car-gallery');


const totalItems = items.length;

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function showNextCar() {
    currentIndex = (currentIndex + 1) % totalItems; // Avança para o próximo carro
    updateCarousel(currentIndex);
}

function showPrevCar() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Volta para o carro anterior
    updateCarousel(currentIndex);
}

document.getElementById('next').onclick = showNextCar;
document.getElementById('prev').onclick = showPrevCar;

// Muda para o carro correspondente ao clicar no indicador
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Configura o carrossel para alternar automaticamente a cada 5 segundos
setInterval(showNextCar, 5000);

document.getElementById('carros-menu').onclick = function() {
    let gallery = document.getElementById('car-gallery');
    // Alterna entre mostrar e esconder a galeria de carros
    gallery.classList.toggle('hidden');
};

carrosMenu.addEventListener('click', () => {
    // Alterna a classe "hidden" na seção da galeria de carros
    carGallerySection.classList.toggle('hidden');
    // Rola a página para a seção da galeria, caso esteja visível
    if (!carGallerySection.classList.contains('hidden')) {
        carGallerySection.scrollIntoView({ behavior: 'smooth' });
    }
});carrosMenu.addEventListener('click', function() {
    // Alterna a visibilidade da seção de galeria
    carGallerySection.classList.toggle('hidden');
});*/

let currentIndex = 0;
let items = document.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.indicators ul li');
let carrosMenu = document.getElementById('carros-menu');
let carGallerySection = document.getElementById('car-gallery');

const totalItems = items.length;

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function showNextCar() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel(currentIndex);
}

function showPrevCar() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel(currentIndex);
}

document.getElementById('next').onclick = showNextCar;
document.getElementById('prev').onclick = showPrevCar;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Configura o carrossel para alternar automaticamente a cada 5 segundos
setInterval(showNextCar, 5000);

carrosMenu.addEventListener('click', () => {
    carGallerySection.classList.toggle('hidden');
    if (!carGallerySection.classList.contains('hidden')) {
        carGallerySection.scrollIntoView({ behavior: 'smooth' });
    }
});



