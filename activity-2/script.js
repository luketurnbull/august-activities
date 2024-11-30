document
  .querySelector("#mobile-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".header-menu").classList.toggle("active");
    document.querySelector("#header-nav").classList.toggle("active");
  });
