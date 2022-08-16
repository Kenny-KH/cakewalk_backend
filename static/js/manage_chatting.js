const $dates = document.querySelector('.dates');
const $month = document.querySelector('.month');

var calendar = {
  events: [
    {
      date: '2022-08-5',
      order: ['order1', 'order2', 'order3']
    },
    {
      date: '2022-08-13',
      order: ['order1', 'order2']
    },
    {
      date: '2022-08-17',
      order: ['order1', 'order2']
    }
  ]
};


function render(current) {
  let string = '';
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();
  const currentDay = new Date(currentYear, currentMonth + 1, 0);
  let curDate = currentDay.getDate();

  var startDay = new Date(currentYear, currentMonth, 0);
  var prevDate = startDay.getDate(); //날짜
  var prevDay = startDay.getDay(); //요일

  for (let i = prevDate - prevDay; i <= prevDate; i++) {
    string += `<div class="prev day"></div>`;
  }
  for (let i = 1; i <= curDate; i++) {
    string +=
      `<div class="cur day">
      <p class="day-num">${i}</p>
      <div class="count"></div>
    </div>`;
  }
  $dates.innerHTML = string;
  $month.innerText = `${currentYear}.${currentMonth + 1}`;
}

var current = new Date();
let currentYear = current.getFullYear();
let currentMonth = current.getMonth();

render(current);

const $prevBtn = document.querySelector('#left');
const $nextBtn = document.querySelector('#right');

$prevBtn.addEventListener('click', prev);
$nextBtn.addEventListener('click', next);

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

function monthText(num) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const en = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
}