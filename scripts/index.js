const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#edit-name");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#describe-yourself");
const modalCloseBtn = editProfileModal.querySelector(".modal__close-button");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const newPostBtn = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const imageLink = newPostForm.querySelector("#url");
const imageCaption = newPostForm.querySelector("#caption-text");
const newPostSaveBtn = newPostModal.querySelector(".modal__save-button");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

function closeModal(event) {
  event.target.closest(".modal").classList.remove("modal_is-opened");
}

modalCloseBtn.addEventListener("click", closeModal);

function handlerEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handlerEditProfileSubmit);

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

function handleNewCardPost(evt) {
  evt.preventDefault();
  console.log(imageLink);
  console.log(imageCaption);
  newPostModal.classList.remove("modal_is-opened");
}

newPostSaveBtn.addEventListener("submit", handleNewCardPost(evt));
