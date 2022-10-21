import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const inputAvatarLinkRef = React.useRef('');

  function handleSubmit(event) {

    event.preventDefault();

    onUpdateAvatar(inputAvatarLinkRef.current.value);

  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
                   buttonText='Сохранить'>

      <input className="popup__input popup__input_type_avatar"
             type="url"
             name="avatar"
             placeholder="Ссылка на аватар"
             required
             ref={inputAvatarLinkRef}/>
      <span className="popup__error"></span>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;