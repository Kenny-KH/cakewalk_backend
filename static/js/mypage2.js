const $couponBtn = document.querySelector('#coupon');
const $pointBtn = document.querySelector('#point');
const $pointModalTotalWrap = document.querySelector('.p-modal-total-wrap');
const $couponModalTotalWrap = document.querySelector('.c-modal-total-wrap');


$couponBtn.addEventListener('click', () => btnClick('coupon', 'c'));
$pointBtn.addEventListener('click', () => btnClick('point', 'p'));
console.log($pointModalTotalWrap);
$pointModalTotalWrap.addEventListener('click', (e) => wrapClick(e, 'p', 'point'));
$couponModalTotalWrap.addEventListener('click', (e) => wrapClick(e, 'c', 'coupon'));
console.log($pointModalTotalWrap);


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