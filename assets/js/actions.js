const btn1 = document.querySelector('.tab-btn1');
const btn2 = document.querySelector('.tab-btn2');
const btn3 = document.querySelector('.tab-btn3');
const btn4 = document.querySelector('.tab-btn4');
const btn5 = document.querySelector('.tab-btn5');
const sRank = document.querySelector('.categoria-s-rank');
const aERank = document.querySelector('.categoria-a-e-rank');
const Humans = document.querySelector('.humanos');
const Monarcas = document.querySelector('.monarcas');
const Sombras = document.querySelector('.sombras');

btn5.addEventListener('click', function () {
    btn5.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn3.classList.remove('active');
    btn2.classList.remove('active');
    btn1.classList.remove('active');
    Monarcas.style.display = 'none';
    sRank.style.display = 'none';
    aERank.style.display = 'none';
    Humans.style.display = 'none';
    Sombras.style.display = '';
});

btn4.addEventListener('click', function () {
    btn5.classList.remove('active');
    btn4.classList.add('active');
    btn3.classList.remove('active');
    btn2.classList.remove('active');
    btn1.classList.remove('active');
    Sombras.style.display = 'none';
    sRank.style.display = 'none';
    aERank.style.display = 'none';
    Humans.style.display = 'none';
    Monarcas.style.display = '';
});

btn3.addEventListener('click', function () {
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    Monarcas.style.display = 'none';
    Sombras.style.display = 'none';
    sRank.style.display = 'none';
    aERank.style.display = 'none';
    Humans.style.display = '';
});


btn2.addEventListener('click', function () {
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    sRank.style.display = 'none';
    Humans.style.display = 'none';
    Sombras.style.display = 'none';
    Monarcas.style.display = 'none';
    aERank.style.display = '';
});

btn1.addEventListener('click', function () {
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    Humans.style.display = 'none';
    Sombras.style.display = 'none';
    Monarcas.style.display = 'none';
    aERank.style.display = 'none';
    sRank.style.display = '';
});