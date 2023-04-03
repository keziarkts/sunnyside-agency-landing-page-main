const navToggle = document.querySelector(".mobile-nav-toggle");
const myNav = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    myNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false) 
    : navToggle.setAttribute("aria-expanded", true);
    myNav.toggleAttribute("data-visible");
    myHeader.toggleAttribute("data-overlay");
});