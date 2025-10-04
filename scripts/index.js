const initialCards = [
  {
    name: "Horizontal Test",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
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

const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = cardsContainer.querySelector("#card-template");

/* PREVIEW MODAL NAMES*/

const cardPreviewModal = document.querySelector("#modal__card-preview");
const cardPreviewClose = cardPreviewModal.querySelector(
  ".modal__preview-close"
);
const cardPreviewModalImage = cardPreviewModal.querySelector(".modal__link");
const cardPreviewCaption = cardPreviewModal.querySelector(".modal__caption");

function getCardElement(data) {
  const cardElement = cardTemplate.content.cloneNode(true);

  const cardElementImage = cardElement.querySelector(".card__image");
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;

  const cardElementName = cardElement.querySelector(".card__name");
  cardElementName.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button");
    cardLikeBtn.classList.toggle("card__like-button-clicked");
  });

  /* PREVIEW MODAL FUNCTION */

  cardElementImage.addEventListener("click", () => {
    cardPreviewCaption.textContent = data.name;
    cardPreviewModalImage.src = data.link;
    cardPreviewModalImage.alt = data.name;
    openModal(cardPreviewModal);
  });

  cardPreviewClose.addEventListener("click", () => {
    closeModal(cardPreviewModal);
  });

  const cardDeleteBtnElement = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnElement.addEventListener("click", () => {
    cardDeleteBtnElement.closest(".card").remove();
  });

  return cardElement;
}

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

function newCardPost(evt) {
  evt.preventDefault();
  openModal(newPostModal);
}

newPostBtn.addEventListener("click", newCardPost);
newPostForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  console.log("card created");

  const data = {
    name: imageCaption.value.trim(),
    link: imageLink.value.trim(),
  };

  const newCard = getCardElement(data);

  cardsContainer.prepend(newCard);

  newPostForm.reset();
  closeModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

initialCards.forEach((data) => {
  const clonedCard = getCardElement(data);
  cardsContainer.prepend(clonedCard);
});
