function Main(props) {

  return (
    <main className="content">

      <section className="profile">

        <div className="profile__avatar"
              onClick = {props.handleEditAvatarClick}></div>
        <div className="profile__description">
          <h1 className="profile__name">Александр</h1>
          <button className="profile__edit-button"
                  type="button"
                  onClick={props.handleEditProfileClick}></button>
          <p className="profile__job">Инженер</p>
        </div>
        <button className="profile__add-button"
                type="button"
                onClick={props.handleAddPlaceClick}></button>

      </section>

      <section className="elements">

        <ul className="elements__list">

        </ul>

      </section>

    </main>
  );
}

export default Main;