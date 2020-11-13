const loader = document.getElementById("loader");

window.onload = () => {
  setTimeout(() => {
    turnOffLoader();
  }, 2000);
};

const turnOffLoader = () => {
  loader.style.display = "none";
};
