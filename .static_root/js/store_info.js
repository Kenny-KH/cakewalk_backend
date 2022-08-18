let imageList = [
  "https://image.idus.com/image/files/cb6da947f9dd4ba4ad7ac0c04d4db93c.jpg",
  "https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2018/12/ganashu01_2.jpg",
  "https://blog.kakaocdn.net/dn/EDoJg/btqMN3p5nFA/aAs9MRAMwYRtprhz4cWYNk/img.png",
  "https://mblogthumb-phinf.pstatic.net/MjAyMTA2MTZfMjc2/MDAxNjIzODIwNTY0NzM4.wuhRG6wNtjk_Nz6wV9v_oJBLvskAtRj-IdPmr_KfIQsg.IiP-c5VuMHDlxj6nXkAGJmoQhtNUECyS2_4OE7yT-bYg.JPEG.ksk04140414/SE-29833AE6-A3F7-4BB8-8580-5BB05159FBE3.jpg?type=w800",
];

const changeImage = () => {
  let cake1 = document.getElementById("cake1").src;
  let cake2 = document.getElementById("cake2").src;
  let cake3 = document.getElementById("cake3").src;

  // cake4는 메인 이미지
  let mainCake = document.getElementById("mainCake").src;

  let temp = cake1;
  document.getElementById("cake1").src = cake2;
  document.getElementById("cake2").src = cake3;
  document.getElementById("cake3").src = mainCake;
  document.getElementById("mainCake").src = temp;
};

const cakeOnClick = (id) => {
  // cake4는 메인 이미지
  let image = document.getElementById("mainCake").src;
  let temp = document.getElementById(id).src;
  document.getElementById("mainCake").src = temp;
  document.getElementById(id).src = image;
};

setInterval(changeImage, 5000);

// 모달창

const openModal = () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("hidden");
};
