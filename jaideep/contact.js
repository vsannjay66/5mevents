document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle nav menu on hamburger click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close nav menu when any link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
