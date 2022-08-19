const $fileInput = document.querySelector(".fileInput");
const $fileName = document.querySelector(".fileName");
let select = "";
let inputDate = "";
let inputTime = "";
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
const todayHour = today.getHours();
const todayMinute = today.getMinutes();

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

  if (
    today.getMonth() === currentMonth &&
    today.getFullYear() === currentYear
  ) {
    for (let i = 1; i <= curDate; i++) {
      if (i === today.getDate()) {
        string += `<div class="cur day">
            <p class="impossible day-num today" onclick="${select} ">${i}</p>
            </div>`;
      } else if (i < today.getDate() + 2) {
        string += `<div class="cur day">
            <p class="impossible day-num" onclick="${select} ">${i}</p>
            </div>`;
      } else {
        string += `<div class="cur day">
          <p class="possible day-num">${i}</p>
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
render(current);

let selectDay = "";
let isToday = false;
$dates.addEventListener("click", (e) => {
  if (e.target.className === "cur day") {
    selectDay = e.target.children[0].innerText;
  } else if (
    e.target.className === "possible day-num" ||
    e.target.className === "day-num today"
  ) {
    selectDay = e.target.innerText;
  }

  Number(selectDay) === today.getDate() ? (isToday = true) : (isToday = false);
  inputDate = `${currentMonth + 1}월 ${selectDay}일`;
  selectDay === "" ? (inputDate = "") : null;

  const pickup = document.querySelector(".choice_pickup");

  pickup.innerHTML = `<i class="fa-solid fa-check"></i><span class="pickup-date"> ${inputDate}</span> 픽업 시간 선택`;
  console.log(pickup.innerHTML);
});

const $prevBtn = document.querySelector("#left");
const $nextBtn = document.querySelector("#right");

$prevBtn.addEventListener("click", prev);
$nextBtn.addEventListener("click", next);

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

const buttons = document.getElementsByClassName("time_btn");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    if (inputDate == "") {
      alert("날짜를 먼저 선택하세요!!");
    } else {
      for (let button of buttons) {
        button.classList.remove("pink_btn");
      }
      inputTime = e.target.innerHTML;
      document.querySelector("#date").value = `${inputDate} ${inputTime}`;
      e.target.className += " pink_btn";
    }
  });
}
