document.onreadystatechange = function(){
  if(document.readyState === 'complete') {
   let popup = document.querySelector('.popup-container');
   let closePopup = document.querySelector('.popup-close');
   closePopup.onclick = function () {
     popup.classList.add('closed');
   };
  }
}