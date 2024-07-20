document.addEventListener("DOMContentLoaded", addListeners);
document.addEventListener("astro:after-swap", addListeners);

function addListeners() {
  const menuButton = document.getElementById("astronav-menu");
  menuButton?.addEventListener("click", toggleMobileNav);
}

function toggleMobileNav() {
  document.querySelectorAll(".astronav-toggle").forEach(el => el.classList.toggle("hidden"));
}

//select by class name