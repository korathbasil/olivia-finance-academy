const body = document.getElementById("body");
const loader = document.getElementById("loader");
const nav = document.getElementById("responsive-nav");
const navButton = document.getElementById("responsive-nav-button");
let showResponsiveNav = false;

window.onload = () => {
  setTimeout(() => {
    body.style.overflowY = "scroll";
    loader.style.opacity = 0;
    setTimeout(() => {
      turnOffLoader();
    }, 400);
  }, 1000);
};

const turnOffLoader = () => {
  loader.style.display = "none";
};

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
