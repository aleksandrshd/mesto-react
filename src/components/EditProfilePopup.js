import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [nameClicked, setNameClicked] = React.useState('');
  const [descriptionClicked, setDescriptionClicked] = React.useState('');
  const [nameError, setNameError] = React.useState('Имя не может быть пустым');
  const [descriptionError, setDescriptionError] = React.useState('Описание не может быть пустым');
  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (nameError || descriptionError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, descriptionError])

  function handleBlur(event) {
    switch (event.target.name) {
      case 'name':
        setNameClicked(true);
        break;
      case 'description':
        setDescriptionClicked(true);
        break;
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name);
    if (event.target.value.length < 2 || event.target.value.length > 40) {
      setNameError('Имя должно быть не короче 2 и не длиннее 40 символов');

      if (!event.target.value) {
        setNameError('Имя не может быть пустым');
      }
    } else {
      setNameError('');
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
    console.log(description);
    if (event.target.value.length < 2 || event.target.value.length > 40) {
      setDescriptionError('Описание должно быть не короче 2 и не длиннее 200 символов');

      if (!event.target.value) {
        setDescriptionError('Описание не может быть пустым');
      }
    } else {
      setDescriptionError('');
    }
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
                   buttonText={isLoading ? 'Сохранение ...' : 'Сохранить'}
                   formValid={formValid}>

      <input className="popup__input popup__input_type_name"
             type="text"
             name="name"
             placeholder="Имя пользователя"
             required
             minLength="2"
             maxLength="40"
             value={name}
             onChange={handleNameChange}
             onBlur={handleBlur}/>
      <span className="popup__error">{(nameError && nameClicked) ? nameError : ''}</span>
      <input className="popup__input popup__input_type_job"
             type="text"
             name="description"
             placeholder="Описание"
             required
             minLength="2"
             maxLength="200"
             value={description}
             onChange={handleDescriptionChange}
             onBlur={handleBlur}/>
      <span className="popup__error">{(descriptionError && descriptionClicked) ? descriptionError : ''}</span>

    </PopupWithForm>
  );

}

export default EditProfilePopup;