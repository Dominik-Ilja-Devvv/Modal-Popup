/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList.add("show-modal");
    });
  }
};

showModal("open-modal", "modal-container");

/*=============== CLOSE MODAL ===============*/
function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("show-modal");
}

const closeBtns = document.querySelectorAll(".close-modal");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});
