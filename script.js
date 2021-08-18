const burger = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const headerLogo = document.querySelector(".header__logo");

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

burger.onclick = () => {
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
  menuBody.classList.toggle("active");
  headerLogo.classList.toggle("active");
};

new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
