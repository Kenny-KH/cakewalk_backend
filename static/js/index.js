const $header = document.querySelector('header');
const [$showRightBtn, $shopRightBtn] = document.querySelectorAll('#right');
const [$showLeftBtn, $shopLeftBtn] = document.querySelectorAll('#left');
const [$showCakeList, $shopCakeList] = document.querySelectorAll('.cakes-wrap');

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        $header.classList.add('headerBottom');
    } else {
        $header.classList.remove('headerBottom');
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        $header.classList.add('headerBottom');
    } else {
        $header.classList.remove('headerBottom');
    }
});

const num = 500;

$showRightBtn.addEventListener('click', () => { 
    $showCakeList.scrollBy({ left: num, top: 0, behavior: 'smooth' }) 
});

$showLeftBtn.addEventListener("click", () => {
    $showCakeList.scrollBy({ left: -num, top: 0, behavior: 'smooth' }) 
})

$shopRightBtn.addEventListener("click", () => {
    $shopCakeList.scrollBy({ left: num, top: 0, behavior: 'smooth' }) 
})

$shopLeftBtn.addEventListener("click", () => {
    $shopCakeList.scrollBy({ left: -num, top: 0, behavior: 'smooth' }) 
})

const mainCakeInfo = document.querySelector('.top-cake-info');
const mainCake = document.querySelector('.top-img-wrap');
mainCake.addEventListener('mouseenter', () => {
    mainCakeInfo.classList.add('show');
    console.log('enter');
})

mainCake.addEventListener('mouseleave', () => {
    mainCakeInfo.classList.remove('show');
    console.log('leave');
})

const [$showCakeInfo, $shopCakeInfo] = document.querySelectorAll('.cake-info');
const firstCake = document.querySelector('.cakes-wrap li');
$showCakeList.addEventListener('mouseover', (e) => handleMouseover(e, $showCakeInfo));
$shopCakeList.addEventListener('mouseover', (e) => handleMouseover(e, $shopCakeInfo));
const defaultX = firstCake.getBoundingClientRect().left;

function handleMouseover(e, element) {
    if(e.target.tagName === 'IMG') {
        const x = e.target.getBoundingClientRect().left - defaultX;
        const y = window.pageYOffset + e.target.getBoundingClientRect().top;
        element.style.left = `${x}px`;
        element.classList.add('show');
    } else {
        element.classList.remove('show');
    }
}

$showCakeList.addEventListener('scroll', () => {
    $showCakeInfo.classList.remove('show');
})

$shopCakeList.addEventListener('scroll', () => {
    $shopCakeInfo.classList.remove('show');
})