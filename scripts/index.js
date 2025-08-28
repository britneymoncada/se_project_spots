const editProfileBtn = document.querySelector(".profile__edit-button");

const editProfileModal = document.querySelector("#edit-profile-modal");

const modalCloseBtn = editProfileModal.querySelector(".modal__close-button");

const newPostBtn = document.querySelector(".profile__post-button");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseBtn = editProfileModal.querySelector(".modal__close-button");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

modalCloseBtn.addEventListener("click", closeModal);

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", closeModal);

function closeModal(event) {
  event.target.closest(".modal").classList.remove("modal_is-opened");
}
