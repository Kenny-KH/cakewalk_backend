const $header = document.querySelector('header');
const $leftBtn = document.querySelector('.left-btn');
const $rightBtn = document.querySelector('.right-btn');
const $cakeList = document.querySelector('.cakes');

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        $header.classList.add('headerBottom');
    } else {
        $header.classList.remove('headerBottom');
    }
});

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