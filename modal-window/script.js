"use strict";

// NOTES:
// We use classList.remove without the dot because it's not a query selector.
// The dot is only needed when selecting the class with querySelector; here, we are directly passing the class name for removal.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");

// FUNCTION FOR OPENING THE MODAL WINDOW
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// FUNCTION FOR CLOSING THE MODAL WINDOW
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// FOR LOOP FOR OPENING THE MODAL WINDOW
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", openModal);
}

// Closing the modal with the X Button
closeModalBtn.addEventListener("click", closeModal);

// Closing the modal with the click on the overlay
overlay.addEventListener("click", closeModal);

// Closing the modal with the ESC key
// Listening for events on the entire document, regardless of where they occur.
// I gave the function the parameter 'event'. This works because I don't call this function here; JavaScript calls this function automatically when a keydown event happens and passes the event object as an argument.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
