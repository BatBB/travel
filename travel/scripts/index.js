console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css +12\n5. Интерактивность, реализуемая через css +20")

const nav = document.querySelector(".nav");
const burgerOpen = document.querySelector(".menu-burger");
const burgerClose = document.querySelector(".menu-burger-close");
const overlay = document.querySelector(".overlay");
const navItem = document.querySelector(".nav-item");

burgerOpen.addEventListener("click", burgerMenuOpen);
burgerClose.addEventListener("click", burgerMenuClose);
overlay.addEventListener("click", burgerMenuClose);
// navItem.addEventListener("click", burgerMenuClose);

function burgerMenuOpen () {
  nav.classList.add("active");
  overlay.classList.add("active");
}

function burgerMenuClose () {
  nav.classList.remove("active");
  overlay.classList.remove("active");
}

nav.addEventListener("click", (e) => {
  // console.log(e.target.classList.value);
  if (e.target.classList.value === "nav-link"){
    burgerMenuClose();
  }
});

