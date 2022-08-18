/*--------------------모달창 띄우기 ---------------------------- */
const all_images = document.querySelectorAll(".img2");
const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const modal_img = document.querySelector(".modal-img");
const $tagWrap = document.querySelector(".tag-wrap");
let current_image;
let cur_img_num;
const $pickCake = document.querySelector('.pics_cakes');

const right_arrow = document.querySelector(".next");
const left_arrow = document.querySelector(".previous");


const firstId = Number(all_images[0].id);
const lastId = Number(all_images[all_images.length-1].id);
console.log(firstId, lastId);

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
    modal_img.id = ele.id;

    if(Number(ele.id) === firstId) {
      left_arrow.classList.add('hide');
    } else if(Number(ele.id) === lastId) {
      right_arrow.classList.add('hide');
    } else {
      left_arrow.classList.remove('hide');
      right_arrow.classList.remove('hide');
    }
  });
});

/*--------------------모달창 닫기 ---------------------------- */
const close_modal = document.querySelector(".close_modal");

close_modal.addEventListener("click", () => {
  modal_body.style.display = "none";
  modal.style.display = "none";
});

/*-------------이미지 넘기기 ------*/

const img_src_str = "./cake_img/cake";

right_arrow.addEventListener("click", (e) => {
  console.log(e.target.id);
  console.log(cur_img_num);
  cur_img_num++;
  console.log(cur_img_num);

  // modal_img.src = cur_img_num;

  console.log(cur_img_num, firstId);
  if(cur_img_num === firstId) {
    left_arrow.classList.add('hide');
  } else if(cur_img_num === lastId) {
    right_arrow.classList.add('hide');
  } else {
    left_arrow.classList.remove('hide');
    right_arrow.classList.remove('hide');
  }
  console.log(modal_img.src);
  for (let i = 0; i < all_images.length; i++) {
    console.log(typeof all_images.item(i).id, typeof cur_img_num);
    if (Number(all_images.item(i).id) === cur_img_num) {
      console.log("fdkdjfksjfksdfjls");
      modal_img.src = all_images.item(i).src;
      modal_img.id = Number(all_images.item(i).id);
    }
  }

});

left_arrow.addEventListener("click", () => {
  cur_img_num--;

  if(cur_img_num === firstId) {
    left_arrow.classList.add('hide');
  } else if(cur_img_num === lastId) {
    right_arrow.classList.add('hide');
  } else {
    left_arrow.classList.remove('hide');
    right_arrow.classList.remove('hide');
  }

  for (let i = 0; i < all_images.length; i++) {
    console.log(typeof all_images.item(i).id, typeof cur_img_num);
    if (Number(all_images.item(i).id) === cur_img_num) {
      modal_img.src = all_images.item(i).src;
      modal_img.id = Number(all_images.item(i).id);
    }
  }

});

$tagWrap.addEventListener("click", (e) => {
  // console.log('dsf');
  const $ul = e.target.closest("ul");
  if (e.target.tagName === "BUTTON") {
    for (let i = 0; i < $ul.children.length; i++) {
      if ($ul.children[i].classList.contains("tag-check")) {
        $ul.children[i].classList.remove("tag-check");
        $ul.children[i].children[0].classList.remove("tag-color");
      }
    }
    document.querySelector("#code").value = e.target.value;
    console.log(document.querySelector("#code").value);
    e.target.parentNode.classList.add("tag-check");
    e.target.classList.add("tag-color");
  }
});


// 마우스오버시 슈웅 커짐
// $pickCake.addEventListener('mouseover', (e) => {
//   if(e.target.tagName === 'IMG') {
//     console.log(e.target);
//     e.target.classList.add('mouseover');
//   }
  
// })