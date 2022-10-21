import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
    console.log(description);
  }

  function handleSubmit(event) {

    event.preventDefault();

    onUpdateUser(name, description);

  }

  return (
    <PopupWithForm name="profile" title="Редактировать профиль"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
                   buttonText='Сохранить'>

      <input className="popup__input popup__input_type_name" type="text" name="name"
             placeholder="Имя пользователя"
             required
             minLength="2"
             maxLength="40"
             value={name}
             onChange={handleNameChange}/>
      <span className="popup__error"></span>
      <input className="popup__input popup__input_type_job" type="text" name="job"
             placeholder="Описание"
             required
             minLength="2"
             maxLength="200"
             value={description}
             onChange={handleDescriptionChange}/>
      <span className="popup__error"></span>

    </PopupWithForm>
  );

}

export default EditProfilePopup;