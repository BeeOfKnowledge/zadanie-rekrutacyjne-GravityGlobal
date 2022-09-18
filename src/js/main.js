var clicks = 0;

window.onload = function () {
  document.getElementById("btn-popup").addEventListener("click", showPopup);
  document.getElementById("popup__icon").addEventListener("click", closePopup);
  document.getElementById("btn--popup").addEventListener("click", resetClicks);

  if (localStorage.getItem("clicks")) {
    clicks = Number(localStorage.getItem("clicks"));
  }
};

function showPopup() {
  document.getElementById("overlay").classList.remove("hide");
  document.getElementById("popup").classList.remove("hide");

  addClick();

  if (clicks > 5) {
    document.getElementById("btn--popup").classList.remove("hide");
  }
}

function closePopup() {
  document.getElementById("overlay").classList.add("hide");
  document.getElementById("popup").classList.add("hide");
}

function addClick() {
  clicks += 1;
  var b = document.getElementById("popup__clicks");
  b.textContent = clicks + " times";

  localStorage.setItem("clicks", clicks);
}

function resetClicks() {
  localStorage.clear();
  localStorage.setItem("clicks", 0);
  clicks = 0;

  var b = document.getElementById("popup__clicks");
  b.textContent = 0 + " times";
  document.getElementById("btn--popup").classList.add("hide");
}
