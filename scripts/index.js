const initialCards = [
  {
    name: "Place name here",
    link: "https://image-url-here.jpg",
  },

  {
    name: "Another place name",
    link: "https://another-image-url.jpg",
  },

  {
    name: "Another place name",
    link: "https://another-image-url.jpg",
  },

  {
    name: "Another place name",
    link: "https://another-image-url.jpg",
  },

  {
    name: "Another place name",
    link: "https://another-image-url.jpg",
  },

  {
    name: "Another place name",
    link: "https://another-image-url.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#edit-name");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#describe-yourself");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const newPostBtn = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const imageLink = newPostForm.querySelector("#url");
const imageCaption = newPostForm.querySelector("#caption-text");
const newPostSaveBtn = newPostModal.querySelector(".modal__save-button");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

function handlerEditProfileSubmit() {
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
}

editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handlerEditProfileSubmit();
  closeModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

function NewCardPost(evt) {
  evt.preventDefault();
  openModal(newPostModal);
}

newPostBtn.addEventListener("click", NewCardPost);
newPostForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(imageLink.value);
  console.log(imageCaption.value);
  closeModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

initialCards.forEach(function (card) {
  console.log(card.name);
});
