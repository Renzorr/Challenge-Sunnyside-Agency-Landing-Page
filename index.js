const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav_links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
});
