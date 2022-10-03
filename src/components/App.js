import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="App">

      <Header/>

      <Main/>

      <Footer/>

      <PopupWithForm name="profile" title="Редактировать профиль"
                     children={
                       <>
                         <input className="popup__input popup__input_type_name" type="text" name="name" value=""
                                required
                                minLength="2"
                                maxLength="40"/>
                         <span className="popup__error"></span>
                         <input className="popup__input popup__input_type_job" type="text" name="job" value="" required
                                minLength="2"
                                maxLength="200"/>
                         <span className="popup__error"></span>
                       </>
                     }/>

      {/*<div className="popup popup-profile">

        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="input_type_nameJob" noValidate>
            <input className="popup__input popup__input_type_name" type="text" name="name" value="" required
                   minLength="2"
                   maxLength="40"/>
            <span className="popup__error"></span>
            <input className="popup__input popup__input_type_job" type="text" name="job" value="" required
                   minLength="2"
                   maxLength="200"/>
            <span className="popup__error"></span>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>*/}

      <PopupWithForm name="card" title="Новое место"
                     children={
                       <>
                         <input className="popup__input popup__input_type_title" type="text" name="title" value=""
                                placeholder="Название"
                                required minLength="2" maxLength="30"/>
                         <span className="popup__error"></span>
                         <input className="popup__input popup__input_type_link" type="url" name="link" value=""
                                placeholder="Ссылка на картинку" required/>
                         <span className="popup__error"></span>
                       </>
                     }/>

      {/*<div className="popup popup-card">

        <div className="popup__container popup__container-card">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="input_type_titleLink" noValidate>
            <input className="popup__input popup__input_type_title" type="text" name="title" value=""
                   placeholder="Название"
                   required minLength="2" maxLength="30"/>
            <span className="popup__error"></span>
            <input className="popup__input popup__input_type_link" type="url" name="link" value=""
                   placeholder="Ссылка на картинку" required/>
            <span className="popup__error"></span>
            <button className="popup__save-button popup__save-button-card popup__save-button_type_disabled"
                    type="submit" disabled>Создать
            </button>
          </form>
        </div>

      </div>*/}



      <div className="popup popup-image">

        <div className="popup__container popup__container-image">
          <button className="popup__close-button" type="button"></button>
          <img className="popup__img"
               src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
               alt="Архыз"/>
          <h2 className="popup__caption"></h2>
        </div>

      </div>

      <PopupWithForm name="delete-card" title="Вы уверены?"/>

      {/*<div className="popup popup-delete-card">

        <div className="popup__container popup__container-delete-card">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <form className="popup__form" name="input_type_delete-card" noValidate>
            <button className="popup__save-button popup__save-button_type_delete" type="submit">Да</button>
          </form>
        </div>

      </div>*/}

      <PopupWithForm name="avatar" title="Обновить аватар"
                     children={
                       <>
                         <input className="popup__input popup__input_type_avatar" type="url" name="avatar" value=""
                                placeholder="Ссылка на аватар" required/>
                         <span className="popup__error"></span>
                       </>
                     }/>

      {/*<div className="popup popup-avatar">

        <div className="popup__container popup__container-avatar">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="input_type_avatar" noValidate>
            <input className="popup__input popup__input_type_avatar" type="url" name="avatar" value=""
                   placeholder="Ссылка на аватар" required/>
            <span className="popup__error"></span>
            <button className="popup__save-button popup__save-button-avatar popup__save-button_type_disabled"
                    type="submit" disabled>Сохранить
            </button>
          </form>
        </div>

      </div>*/}

      <div className="popup popup-server-error">

        <div className="popup__container popup__container-delete-card">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title popup__title_type_delete">Возникла ошибка</h2>
          <span className="popup__error popup__error_server"></span>
        </div>

      </div>

      <template className="element-template">

        <li className="elements__card">
          <button className="elements__delete-button" type="button"></button>
          <img className="elements__image"
               src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
               alt="Архыз"/>
          <div className="elements__container">
            <h2 className="elements__title"></h2>
            <div>
              <button className="elements__like-button" type="button"></button>
              <p className="elements__like-counter"></p>
            </div>
          </div>
        </li>

      </template>
    </div>
  );
}

export default App;
