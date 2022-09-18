window.onload = function () {
  document.getElementById("btn-popup").addEventListener("click", showPopup);
};

function showPopup() {
  document.getElementById("overlay").classList.remove("hide");
  document.getElementById("popup").classList.remove("hide");
}
