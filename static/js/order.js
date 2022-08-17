const $fileInput = document.querySelector(".fileInput");
const $fileName = document.querySelector(".fileName");
let select = "";

var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴'

const $body = document.querySelector("body");
const $modalWrap = document.querySelector(".modal-wrap");
const $modal = document.querySelector(".modal");
const $orderBtn = document.querySelector(".orderBtn");
const $confirmBtn = document.querySelector(".confirm-btn");

$orderBtn.addEventListener("click", () => {
  $modalWrap.classList.add("show");
  $modal.classList.add("show");
  $body.classList.add("color");
  $body.classList.add("scroll-none");
});

$confirmBtn.addEventListener("click", () => {
  $modalWrap.classList.remove("show");
  $modal.classList.remove("show");
  $body.classList.remove("color");
  $body.classList.remove("scroll-none");
});

const $dates = document.querySelector(".dates");
const $month = document.querySelector(".month");

const today = new Date();
console.log(today);
function render(current) {
  let string = "";
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();
  const currentDay = new Date(currentYear, currentMonth + 1, 0);
  let curDate = currentDay.getDate();

  var startDay = new Date(currentYear, currentMonth, 0);
  var prevDate = startDay.getDate(); //날짜
  var prevDay = startDay.getDay(); //요일

  if (prevDay !== 6) {
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      string += `<div class="prev day"></div>`;
    }
  }
  console.log(today.getMonth(), currentMonth);
  console.log(today.getFullYear(), currentYear);

  if (
    today.getMonth() === currentMonth &&
    today.getFullYear() === currentYear
  ) {
    for (let i = 1; i <= curDate; i++) {
      if (i === today.getDate()) {
        string += `<div class="cur day">
                <p class="day-num" onclick="${select} ">${i}</p>
                <div class="today"></div>
            </div>`;
      } else {
        string += `<div class="cur day">
                <p class="day-num">${i}</p>
            </div>`;
      }
    }
  } else {
    for (let i = 1; i <= curDate; i++) {
      string += `<div class="cur day">
                <p class="day-num">${i}</p>
            </div>`;
    }
  }

  $dates.innerHTML = string;
  $month.innerText = `${currentYear}.${currentMonth + 1}`;
}

var current = new Date();
let currentYear = current.getFullYear();
let currentMonth = current.getMonth();
console.log(current);
render(current);

const $prevBtn = document.querySelector("#left");
const $nextBtn = document.querySelector("#right");

$prevBtn.addEventListener("click", prev);
$nextBtn.addEventListener("click", next);
//전달 마지막 요일이 토요일이면 전달날짜가 0개 적힘
function next() {
  currentMonth++;
  current = new Date(currentYear, currentMonth, 1);
  render(current);
}

function prev() {
  currentMonth--;
  current = new Date(currentYear, currentMonth, 1);
  render(current);
}
