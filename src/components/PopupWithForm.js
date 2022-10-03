function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name}`}>
      
      <div className={`popup__container popup__container-${props.name}`}>
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title popup__title_type_delete">{props.title}</h2>
        <form className="popup__form" name={`input_type_${props.name}`} noValidate>
          {props.children}
          <button className="popup__save-button popup__save-button_type_delete" type="submit">Да</button>
        </form>
      </div>

    </div>
  );
}

export default PopupWithForm;