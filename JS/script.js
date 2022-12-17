let popup = document.querySelector('.popup-container');
let closePopup = document.querySelector('.popup-close');
closePopup.onclick = function () {
  popup.classList.add('closed');
};


let upButton = document.querySelector('.up-button');
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  }
};
upButton.onclick = function () {
  window.scrollTo(0, 0);
};
