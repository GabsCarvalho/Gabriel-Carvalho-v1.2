// Função para recarregar a página e retração suave do menu
function recarregarPagina() {
    
    menuSide.classList.remove('expandir');

    
    setTimeout(() => {
        location.reload();
    }, 850);
}

// marca a seleção

var menuItem = document.querySelectorAll('.menu-item')
function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

// expandir menu com botão

var expan = document.querySelector('#expan')
var menuSide = document.querySelector('.menu-lateral')

expan.addEventListener('click', function (){
    menuSide.classList.toggle('expandir')
})

//imagem

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const overlay = document.querySelector(".overlay");
    const container = overlay.parentElement;

    container.addEventListener("mousemove", function (e) {
        let containerRect = container.getBoundingClientRect();
        let position = e.clientX - containerRect.left;
        
        if (position < 0) position = 0;
        if (position > containerRect.width) position = containerRect.width;

        overlay.style.width = position + "px";
        slider.style.left = position + "px";
    });
});


// MODULAR TEXT - Ícones de conhecimento
function changeInfoText(text) {
    document.getElementById('infoText').innerText = text;
}

function resetInfoText() {
    document.getElementById('infoText').innerText = 'Passe o cursor sobre os ícones para mais informações.';
}

// MODULAR TEXT 2 - TECNOLOGIA
function changeTCText(text) {
    document.getElementById('TCText').innerText = text;
}

function resetTCText() {
    document.getElementById('TCText').innerText = '[Nome da linguagem]';
}

// MODULAR TEXT 2 - NIVEL
function changeNvText(text) {
    document.getElementById('NvText').innerText = text;
}

function resetNvText() {
    document.getElementById('NvText').innerText = '[Básico / Intermediário / Avançado]';
}

// MODULAR TEXT 2 - PROFICIENCIA
function changePFText(text) {
    document.getElementById('PFText').innerText = text;
}

function resetPFText() {
    document.getElementById('PFText').innerText = '[XX%]';
}

// MODULAR TEXT 2 - EXPERIENCIA
function changeXPText(text) {
    document.getElementById('XPText').innerText = text;
}

function resetXPText() {
    document.getElementById('XPText').innerText = '[Minha experiência com a tecnologia]';
}

// CARROSEU
new Swiper('.projetossection', {
    loop: true,
    speed: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 30 },
        765: { slidesPerView: 2, spaceBetween: 30 },
        1200: { slidesPerView: 3, spaceBetween: 10 },
        2500: { slidesPerView: 4, spaceBetween: 30 }
    }
});