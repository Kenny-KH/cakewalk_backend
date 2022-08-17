const [$showRightBtn, $shopRightBtn] = document.querySelectorAll("#right");
const [$showLeftBtn, $shopLeftBtn] = document.querySelectorAll("#left");
const [$showCakeList, $shopCakeList] = document.querySelectorAll(".cakes-wrap");
const mainCakeInfo = document.querySelector(".top-cake-info");
const mainCake = document.querySelector(".top-img-wrap");
const [$showCakeInfo, $shopCakeInfo] = document.querySelectorAll(".cake-info");
const firstCake = document.querySelector(".cake-wrap");
let defaultX = firstCake.getBoundingClientRect().left;
const $tagWrap = document.querySelector(".tag-wrap");

const num = 500;

window.addEventListener("resize", () => {
  let defaultX = firstCake.getBoundingClientRect().left;
  console.log(defaultX);
});

$showRightBtn.addEventListener("click", () => {
  $showCakeList.scrollBy({ left: num, top: 0, behavior: "smooth" });
});

$showLeftBtn.addEventListener("click", () => {
  $showCakeList.scrollBy({ left: -num, top: 0, behavior: "smooth" });
});

$shopRightBtn.addEventListener("click", () => {
  $shopCakeList.scrollBy({ left: num, top: 0, behavior: "smooth" });
});

$shopLeftBtn.addEventListener("click", () => {
  $shopCakeList.scrollBy({ left: -num, top: 0, behavior: "smooth" });
});

mainCake.addEventListener("mouseenter", (e) => {
  mainCakeInfo.classList.add("show");
  console.log("enter");
});

mainCake.addEventListener("mouseleave", () => {
  mainCakeInfo.classList.remove("show");
  console.log("leave");
});

$showCakeList.addEventListener("mouseover", (e) => {
  handleMouseover(e, $showCakeInfo);
});
$shopCakeList.addEventListener("mouseover", (e) => {
  handleMouseover(e, $shopCakeInfo);

  document.querySelector("#goToStore").addEventListener("click", () => {
    location.href = `/store/detail/${e.target.id}`;
  });

  document.querySelector("#goToOrder").addEventListener("click", () => {
    location.href = `/cake/order/${e.target.id}`;
  });
});
// console.log($shopCakeInfo);

function handleMouseover(e, element) {
  // console.log(element);
  if (e.target.tagName === "IMG") {
    // console.log(e.target);
    const x = e.target.getBoundingClientRect().left - defaultX;
    const y = window.pageYOffset + e.target.getBoundingClientRect().top;
    element.style.left = `${x}px`;
    element.classList.add("show");
  } else {
    element.classList.remove("show");
  }
}

$showCakeList.addEventListener("scroll", () => {
  $showCakeInfo.classList.remove("show");
});

$shopCakeList.addEventListener("scroll", () => {
  $shopCakeInfo.classList.remove("show");
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
    e.target.parentNode.classList.add("tag-check");
    e.target.classList.add("tag-color");
  }
});
