import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import PopupWithServerError from "./PopupWithServerError";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [isServerErrorPopupOpen, setIsServerErrorPopupOpen] = React.useState(false);
  const [serverError, setSeverError] = React.useState('');

  const [currentUser, setСurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo()
      .then(userInfo => setСurrentUser(userInfo));
  }, []);

  console.log(currentUser);

  React.useEffect(() => {

    api.getInitialCards()

      .then(cards => setCards(cards))

      .catch(err => {
        console.log(`${err}`);
        /*props.onServerError(err);*/
      });

  }, []);

  /*console.log(cards[0].name);*/

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardSel) {
    setSelectedCard(cardSel);
  }

  function handleServerError(err) {
    setSeverError(err);
    setIsServerErrorPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsServerErrorPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(userName, userJob) {
    api.setUserInfo(userName, userJob)
      .then(userInfo => setСurrentUser(userInfo))
      .then(() => closeAllPopups());
  }

  function handleUpdateAvatar(avatarLink) {
    api.setUserAvatar(avatarLink)
      .then(userInfo => setСurrentUser(userInfo))
      .then(() => closeAllPopups());
  }

  function handleAddPlaceSubmit(cardName, cardLink) {
    api.setNewCard(cardName, cardLink)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(() => closeAllPopups());
  }

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)

      .then((newCard) => {

        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));

      });

  }

  function handleCardDelete(card) {

    api.deleteCard(card._id)

      .then(() => setCards(cards.filter(cardInitial => cardInitial._id != card._id))
      );

  }

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="App">

        <Header/>

        <Main onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlaceClick={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onServerError={handleServerError}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}/>

        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen}
                          onClose={closeAllPopups}
                          onUpdateUser={handleUpdateUser}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
                       onAddPlace={handleAddPlaceSubmit}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                         onClose={closeAllPopups}
                         onUpdateAvatar={handleUpdateAvatar}/>

        <PopupWithForm name="delete-card" title="Вы уверены?" buttonText='Да'/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupWithServerError name="server-error" title="Возникла ошибка"
                              isOpen={isServerErrorPopupOpen}
                              onClose={closeAllPopups}
                              serverError={serverError}
                              buttonText='Ок'/>

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
