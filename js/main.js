let nav = document.getElementById("nav");
let menuIcon = document.querySelector("#menu-icon");
let navLink = document.querySelectorAll(".nav-link");

// menuIcon.onclick = () => {
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
// };
window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
});
