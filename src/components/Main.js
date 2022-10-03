function Main() {
  
  function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup-card').classList.add('popup_opened');
  }
  
  return (
    <main className="content">

      <section className="profile">

        <div className="profile__avatar"
              onClick = {handleEditAvatarClick}></div>
        <div className="profile__description">
          <h1 className="profile__name">Александр</h1>
          <button className="profile__edit-button"
                  type="button"
                  onClick={handleEditProfileClick}></button>
          <p className="profile__job">Инженер</p>
        </div>
        <button className="profile__add-button"
                type="button"
                onClick={handleAddPlaceClick}></button>

      </section>

      <section className="elements">

        <ul className="elements__list">

        </ul>

      </section>

    </main>
  );
}

export default Main;