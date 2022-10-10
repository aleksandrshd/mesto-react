function ImagePopup(props) {
  return (
    <div className={`popup popup-image ${!(Object.entries(props.card).length === 0) ? 'popup_opened' : ''}`}>

      <div className="popup__container popup__container-image">
        <button className="popup__close-button"
                type="button"
                onClick={props.onClose}></button>
        <img className="popup__img"
             src={props.card.link}
             alt={props.card.name}/>
        <h2 className="popup__caption">{props.card.name}</h2>
      </div>

    </div>
  );
}

export default ImagePopup;