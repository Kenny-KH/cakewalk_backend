const body = document.querySelector("body");

const cakes = document.querySelector('.pics_cakes');

const modal = document.querySelector(".modal");
const modalBody =document.querySelector('.modal_body');
const modalImg = document.querySelector(".modal-img");
// const btnOpenPopup = document.querySelector(".btn-open-popup");

// btnOpenPopup.addEventListener("click", () => {
//     console.log('클릭')
//   modal.classList.toggle("show");

//   if (modal.classList.contains("show")) {
//     body.style.overflow = "hidden";
//   }
// });
// console.log("ㅇㄹㄴㄴㅇ");

modal.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target === modal) {
    modal.classList.toggle("show");
  }
  if (!modal.classList.contains("show")) {
    body.style.overflow = "auto";
  }
});

function popOpen() {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).show();
  $(modalBg).show();
}

function popClose() {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).hide();
  $(modalBg).hide();
}

function onClick() {
  document.querySelector("body").style.display = "block";
  document.querySelector(".modal").style.display = "block";
}
function offClick() {
  document.querySelector("body").style.display = "none";
  document.querySelector(".modal").style.display = "none";
}


cakes.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.target.src);
    modal.classList.add("show");
    modalBody.classList.toggle("show");
    modalImg.src = event.target.src;

})

modal.addEventListener('click', (event) => {
    if(modal.classList.contains("show")) {
        modal.classList.remove("show");
    }
})

let imageIndex  = 0;
let postion = 0;

const IMAGE_width = 450;
const btnPrevios = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")


function previous() {
    if(imageIndex > 0){
        btnNext.removeAttribute("disabled")
    }
}