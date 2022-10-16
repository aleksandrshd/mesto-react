import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import PopupWithServerError from "./PopupWithServerError";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [isServerErrorPopupOpen, setIsServerErrorPopupOpen] = React.useState(false);
  const [serverError, setSeverError] = React.useState('');

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

  return (
    <div className="App">

      <Header/>

      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onServerError={handleServerError}/>

      <Footer/>

      <PopupWithForm name="profile" title="Редактировать профиль"
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}
                     buttonText='Сохранить'>

            <input className="popup__input popup__input_type_name" type="text" name="name"
                   placeholder="Имя пользователя"
                   required
                   minLength="2"
                   maxLength="40"/>
            <span className="popup__error"></span>
            <input className="popup__input popup__input_type_job" type="text" name="job"
                   placeholder="Описание"
                   required
                   minLength="2"
                   maxLength="200"/>
            <span className="popup__error"></span>

      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место"
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
                     buttonText='Создать'>

            <input className="popup__input popup__input_type_title" type="text" name="title"
                   placeholder="Название"
                   required minLength="2" maxLength="30"/>
            <span className="popup__error"></span>
            <input className="popup__input popup__input_type_link" type="url" name="link"
                   placeholder="Ссылка на картинку" required/>
            <span className="popup__error"></span>

      </PopupWithForm>

      <PopupWithForm name="delete-card" title="Вы уверены?" buttonText='Да'/>

      <PopupWithForm name="avatar" title="Обновить аватар"
                     isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}
                     buttonText='Сохранить'>

            <input className="popup__input popup__input_type_avatar" type="url" name="avatar"
                   placeholder="Ссылка на аватар" required/>
            <span className="popup__error"></span>

      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <PopupWithServerError name="server-error" title="Возникла ошибка"
                     isOpen={isServerErrorPopupOpen}
                     onClose={closeAllPopups}
                     serverError={serverError}
                     buttonText='Ок'/>

    </div>
  );
}

export default App;
