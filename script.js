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

let currentIndex = 0;
let items = document.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.indicators ul li');
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
