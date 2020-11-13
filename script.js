const loader = document.getElementById("loader");
const nav = document.getElementById("responsive-nav");
const navButton = document.getElementById("responsive-nav-button");
let showResponsiveNav = false;

window.onload = () => {
  setTimeout(() => {
    turnOffLoader();
  }, 2000);
};

const turnOffLoader = () => {
  loader.style.display = "none";
};

// navButton.addEventListener("click", responsiveNavHandler);

const responsiveNavHandler = () => {
  console.log("Clicked");
  if (showResponsiveNav) {
    nav.style.display = "none";
    showResponsiveNav = false;
  } else {
    nav.style.display = "inline";
    showResponsiveNav = true;
  }
};
