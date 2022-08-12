const $fileInput = document.querySelector('.fileInput');
const $fileName = document.querySelector('.fileName');


$fileInput.addEventListener('change', (e) => {
    $fileName.innerText = e.target.value;
})

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴'

const $body = document.querySelector('body');
const $modalWrap = document.querySelector('.modal-wrap');
const $modal = document.querySelector('.modal');
const $orderBtn = document.querySelector('.orderBtn');
const $confirmBtn = document.querySelector('.confirm-btn');

$orderBtn.addEventListener('click', () => {
	$modalWrap.classList.add('show');
	$modal.classList.add('show');
	$body.classList.add('color');
})

$confirmBtn.addEventListener('click', () => {
	$modalWrap.classList.remove('show');
	$modal.classList.remove('show');
	$body.classList.remove('color');
})

