"use strict";

//  This is a Ui component
// No matter which of these 3 buttons I click, it will open this modal window
// To close it, i can click on the close button or click outside of the modal window, or by clicking the escape key

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

// FOR LOOP FOR OPENING THE MODAL WINDOW
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", openModal);
}

// FUNCTION FOR CLOSING THE MODAL WINDOW
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Closing the modal with the X Button
closeModalBtn.addEventListener("click", closeModal);

// Closing the modal with the click on the overlay
overlay.addEventListener("click", closeModal);

// Closing the modal with the ESC key
