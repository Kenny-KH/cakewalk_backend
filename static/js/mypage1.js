const $leftBtn = document.querySelector('.left-btn');
const $rightBtn = document.querySelector('.right-btn');
const $cakeList = document.querySelector('.cakes');

const num = 500;
$rightBtn.addEventListener("click", () => {
    $cakeList.scrollBy({ left: num, top: 0, behavior: 'smooth' }) 
})

$leftBtn.addEventListener("click", () => {
    $cakeList.scrollBy({ left: -num, top: 0, behavior: 'smooth' }) 
})

$cakeList.addEventListener('scroll', () => {
    if($cakeList.scrollLeft !== 0) {
        $leftBtn.classList.add('left-btn-show');
    } else {
        $leftBtn.classList.remove('left-btn-show');
    }
})

const $couponBtn = document.querySelector('#coupon');
const $pointBtn = document.querySelector('#point');
const $pointModalTotalWrap = document.querySelector('.p-modal-total-wrap');
const $couponModalTotalWrap = document.querySelector('.c-modal-total-wrap');


$couponBtn.addEventListener('click', () => btnClick('coupon', 'c'));
$pointBtn.addEventListener('click', () => btnClick('point', 'p'));

$pointModalTotalWrap.addEventListener('click', (e) => wrapClick(e, 'p', 'point'));
$couponModalTotalWrap.addEventListener('click', (e) => wrapClick(e, 'c', 'coupon'));



function btnClick(text, firstWord) {
    const $modalTotalWrap = document.querySelector(`.${firstWord}-modal-total-wrap`);
    const $modalWrap = document.querySelector(`.${firstWord}-modal-wrap`);
    const $modal = document.querySelector(`.${text}-modal`);

    $modalTotalWrap.classList.add('show');
    $modalWrap.classList.add('show');
    $modal.classList.add('show');
}

function wrapClick(e, firstWord, text) {
    const $modalTotalWrap = document.querySelector(`.${firstWord}-modal-total-wrap`);
    const $modalWrap = document.querySelector(`.${firstWord}-modal-wrap`);
    const $modal = document.querySelector(`.${text}-modal`);

    console.log(e.target.className);
    if(!e.target.className.includes(text)) {
        $modalTotalWrap.classList.remove('show');
        $modalWrap.classList.remove('show');
        $modal.classList.remove('show');
    }
}