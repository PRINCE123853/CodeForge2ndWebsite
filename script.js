document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("main-navbar");
  const hamburger = document.getElementById("menu-btn");
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  let dropdownTimer;


  /* ---------------- NAVBAR STICKY ---------------- */
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 50);
  });


  /* ---------------- MOBILE MENU ---------------- */
  hamburger?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.toggle("show");
  });


  /* ---------------- DROPDOWN FIX (FINAL WORKING) ---------------- */
  const openDropdown = () => dropdown.classList.add("open");
  const closeDropdown = () => dropdown.classList.remove("open");


  // Desktop hover behaviour
  dropdown.addEventListener("mouseenter", () => {
    if (window.innerWidth > 900) {
      clearTimeout(dropdownTimer);
      openDropdown();
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (window.innerWidth > 900) {
      clearTimeout(dropdownTimer);
      dropdownTimer = setTimeout(closeDropdown, 250); // closes smoothly, not instantly
    }
  });

  // Desktop click (keep open for 5 sec)
  dropbtn.addEventListener("click", (e) => {
    if (window.innerWidth > 900) {
      e.preventDefault();
      clearTimeout(dropdownTimer);
      openDropdown();
      dropdownTimer = setTimeout(closeDropdown, 5000);
    }
  });

  // Mobile click toggle
  dropbtn.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    }
  });

});
