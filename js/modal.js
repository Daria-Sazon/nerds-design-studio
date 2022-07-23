var message = document.querySelector(".button-red-2");
var messagePopup = document.querySelector(".modal-message");
var messageClose = messagePopup.querySelector(".modal-close");
var messageForm = messagePopup.querySelector(".contact-form");
var userEmail = messagePopup.querySelector(".label-text");
var userMessage = messagePopup.querySelector(".label-message");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("client");
} catch (err) {
  isStorageSupport = false;
}

message.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");

if (storage) {
    userEmail.value = storage;
    userMessage.focus();
} else {
   userEmail.focus();
 } 
 });

messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-error");
  });

messageForm.addEventListener("submit", function (evt) {
    if (!userEmail.value || !userMessage.value) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-error");
      messagePopup.offsetWidth = messagePopup.offsetWidth;
      messagePopup.classList.add("modal-error");
    } else {
    if (isStorageSupport) {
        localStorage.setItem("client", userEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (messagePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-show");
        messagePopup.classList.remove("modal-error");
      }
    }
  });