let prevButton = document.getElementById('prev')
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
}