/*--------------------모달창 띄우기 ---------------------------- */
const all_images = document.querySelectorAll(".img2");
const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const modal_img = document.querySelector(".modal-img");
let cur_img_num;

all_images.forEach((ele) => {
  ele.addEventListener("click", () => {
    modal.style.display = "block";
    modal_body.style.display = "block";

    cur_img_num = Number(ele.dataset.imgnum);
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
const left_arrow = document.querySelector(".previous");

const img_src_str = "./cake_img/cake";

right_arrow.addEventListener("click", () => {
  cur_img_num++;

  if (cur_img_num <= 7) {
    modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
  } else {
    cur_img_num--;
  }
});

left_arrow.addEventListener("click", () => {
  cur_img_num--;

  if (cur_img_num >= 0) {
    modal_img.setAttribute("src", `${img_src_str}${cur_img_num}.png`);
  } else {
    cur_img_num++;
  }
});
