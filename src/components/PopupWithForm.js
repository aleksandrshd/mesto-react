function PopupWithForm(props) {

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>

      <div className={`popup__container popup__container-${props.name}`}>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title popup__title_type_delete">{props.title}</h2>
        <form className="popup__form" name={`input_type_${props.name}`} noValidate>
          {props.children}
          <button className="popup__save-button popup__save-button_type_disabled" type="submit" disabled>{props.buttonText}</button>
        </form>
      </div>

    </div>
  );
}

export default PopupWithForm;