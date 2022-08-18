const $navWrap = document.querySelector('.nav-wrap');
console.log($navWrap);
$navWrap.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        switch(e.target.id) {
            case 'order':
                console.log('order클릭');
                break;
            case 'design':
                console.log('design클릭');
                break;
            case 'review':
                console.log('review클릭');
                break;
            case 'inquire':
                console.log('inquire클릭');
                break;
            case 'info':
                console.log('info클릭');
                break;
            case 'my-talk':
                console.log('my-talk클릭');
                break;
            
        }
    }
})
