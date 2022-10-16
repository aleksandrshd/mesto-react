function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {

  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>

      <div className={`popup__container popup__container-${name}`}>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`input_type_${name}`}>
          {children}
          <button className="popup__save-button popup__save-button_type_disabled" type="submit"
                  disabled>{buttonText}</button>
        </form>
      </div>

    </div>
  );
}

export default PopupWithForm;