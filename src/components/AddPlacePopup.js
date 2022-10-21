import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [placeLink, setPlaceLink] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');

  function handlePlaceLinkChange(event) {
    setPlaceLink(event.target.value);
  }

  function handlePlaceNameChange(event) {
    setPlaceName(event.target.value);
  }

  function handleSubmit(event) {

    event.preventDefault();

    onAddPlace(placeName, placeLink);

  }

  return (
    <PopupWithForm name="card" title="Новое место"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
                   buttonText='Создать'>

      <input className="popup__input popup__input_type_title"
             type="text"
             name="title"
             placeholder="Название"
             required minLength="2"
             maxLength="30"
             value={placeName}
             onChange={handlePlaceNameChange}/>
      <span className="popup__error"></span>
      <input className="popup__input popup__input_type_link"
             type="url"
             name="link"
             placeholder="Ссылка на картинку"
             required
             value={placeLink}
             onChange={handlePlaceLinkChange}/>
      <span className="popup__error"></span>

    </PopupWithForm>
  );

}

export default AddPlacePopup;