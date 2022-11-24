const menu = document.querySelector('.main__menu');
document.querySelector('#text1').onclick = () => {
    menu.classList.toggle('active3');
    cao.classList.remove('active');
    img.classList.remove('active1');


}

const cao = document.querySelector('.main__seach');
document.querySelector('#text2').onclick = () => {
    cao.classList.toggle('active');
    menu.classList.remove('active3');
    img.classList.remove('active1');



}

const img = document.querySelector('.main__img');
document.querySelector('#text3').onclick = () => {
    img.classList.toggle('active1');
    menu.classList.remove('active3');
    cao.classList.remove('active');
}