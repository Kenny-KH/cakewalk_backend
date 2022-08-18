const $form = document.querySelector('form');

$form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const $dates = document.querySelector('.dates');
const $month = document.querySelector('.month');

const today = new Date();
console.log(today);
function render(current) {
  let string = '';
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();
  const currentDay = new Date(currentYear, currentMonth + 1, 0);
  let curDate = currentDay.getDate();

  var startDay = new Date(currentYear, currentMonth, 0);
  var prevDate = startDay.getDate(); //날짜
  var prevDay = startDay.getDay(); //요일

  if(prevDay !== 6) {
    for (let i = prevDate - prevDay; i <= prevDate; i++) {
      string += `<div class="prev day"></div>`;
    }
  } 
  console.log(today.getMonth(), currentMonth);
  console.log(today.getFullYear(), currentYear);

  if(today.getMonth() ===  currentMonth && today.getFullYear() === currentYear) {
    for (let i = 1; i <= curDate; i++) {
        if(i === today.getDate()) {
            string +=
            `<div class="cur day">
                <p class="day-num">${i}</p>
                <div class="today"></div>
            </div>`;
        } else {
            string +=
            `<div class="cur day">
                <p class="day-num">${i}</p>
            </div>`;
        }


      }  
  } else {
    for (let i = 1; i <= curDate; i++) {
        string +=
            `<div class="cur day">
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

const $prevBtn = document.querySelector('#left');
const $nextBtn = document.querySelector('#right');

$prevBtn.addEventListener('click', prev);
$nextBtn.addEventListener('click', next);
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

const $fileInput = document.querySelector('.fileInput');
const $preview = document.querySelector('.update-cake-preview');


// #8c8b90주말 표시

function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            $preview.src = e.target.result
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(input.files[0])
    }
}

$fileInput.addEventListener('change', (e) => {
    readImage(e.target)
})