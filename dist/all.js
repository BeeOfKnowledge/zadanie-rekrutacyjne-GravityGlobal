var clicks=0;function showPopup(){document.getElementById("overlay").classList.remove("hide"),document.getElementById("popup").classList.remove("hide"),addClick(),5<clicks&&document.getElementById("btn--popup").classList.remove("hide")}function closePopup(){document.getElementById("overlay").classList.add("hide"),document.getElementById("popup").classList.add("hide")}function addClick(){clicks+=1,document.getElementById("popup__clicks").textContent=clicks+" times",localStorage.setItem("clicks",clicks)}function resetClicks(){localStorage.clear(),localStorage.setItem("clicks",0),clicks=0,document.getElementById("popup__clicks").textContent="0 times",document.getElementById("btn--popup").classList.add("hide")}window.onload=function(){document.getElementById("btn-popup").addEventListener("click",showPopup),document.getElementById("popup__icon").addEventListener("click",closePopup),document.getElementById("btn--popup").addEventListener("click",resetClicks),localStorage.getItem("clicks")&&(clicks=Number(localStorage.getItem("clicks")))};