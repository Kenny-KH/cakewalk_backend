/*--------------------모달창 띄우기 ---------------------------- */
const all_images = document.querySelectorAll(".img2");
const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const modal_img = document.querySelector(".modal-img");
let current_image;
let cur_img_num;

all_images.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    modal.style.display = "block";
    modal_body.style.display = "block";

    // cur_img_num = Number(ele.dataset.imgnum);

    cur_img_num = e.target.id;
    current_image = cur_img_num;

    // 가게보기 버튼 제작
    document.querySelector("#goToStore").addEventListener("click", () => {
      location.href = `/store/detail/${current_image}`;
    });

    // 주문하기 버튼 제작
    document.querySelector("#goToOrder").addEventListener("click", () => {
      location.href = `/cake/order/store/${current_image}`;
    });

    let img_src = ele.getAttribute("src");
    modal_img.setAttribute("src", `${img_src}`);
  });
});

/*--------------------모달창 닫기 ---------------------------- */
const close_modal = document.querySelector(".close_modal");

close_modal.addEventListener("click", () => {
  modal_body.style.display = "none";
  modal.style.display = "none";
});

/*-------------이미지 넘기기 ------*/
const right_arrow = document.querySelector(".next");

console.log(right_arrow);
const left_arrow = document.querySelector(".previous");

const img_src_str = "./cake_img/cake";

right_arrow.addEventListener("click", (e) => {
  console.log(e.target.id);
  console.log(cur_img_num);
  cur_img_num++;
  console.log(cur_img_num);

  // modal_img.src = cur_img_num;

  console.log(modal_img.src);
  for (let i = 0; i < all_images.length; i++) {
    console.log(typeof all_images.item(i).id, typeof cur_img_num);
    if (Number(all_images.item(i).id) === cur_img_num) {
      console.log("fdkdjfksjfksdfjls");
      modal_img.src = all_images.item(i).src;
    }
  }
  // if (cur_img_num <= 7) {
  //   modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
  // } else {
  //   cur_img_num--;
  // }
});

left_arrow.addEventListener("click", () => {
  cur_img_num--;

  for (let i = 0; i < all_images.length; i++) {
    console.log(typeof all_images.item(i).id, typeof cur_img_num);
    if (Number(all_images.item(i).id) === cur_img_num) {
      console.log("fdkdjfksjfksdfjls");
      modal_img.src = all_images.item(i).src;
    }
  }
  // if (cur_img_num >= 0) {
  //   modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
  // } else {
  //   cur_img_num++;
  // }
});

/*const body = document.querySelector("body");

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
}*/
