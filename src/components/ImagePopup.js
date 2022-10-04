function ImagePopup() {
  return (
    <div className="popup popup-image">

      <div className="popup__container popup__container-image">
        <button className="popup__close-button" type="button"></button>
        <img className="popup__img"
             src=""
             alt=""/>
        <h2 className="popup__caption"></h2>
      </div>

    </div>
  );
}

export default ImagePopup;