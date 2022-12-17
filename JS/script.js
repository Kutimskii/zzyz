let popup = document.querySelector('.popup-container');
let closePopup = document.querySelector('.popup-close');
closePopup.onclick = function () {
  popup.classList.add('closed');
};


let upButton = document.querySelector('.up-button');
window.onscroll = function () {
  if (window.pageYOffset > 400) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};
upButton.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};
