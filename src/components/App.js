import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

let isEditProfilePopupOpen = false;
let isAddPlacePopupOpen = false;
let isEditAvatarPopupOpen = false;

function handleEditAvatarClick() {
  isEditAvatarPopupOpen = true;
  console.log(`handleEditAvatarClick isOpen: ${isEditAvatarPopupOpen}`);
}

function handleEditProfileClick() {
  isEditProfilePopupOpen = true;
  console.log(`handleEditProfileClick isOpen: ${isEditProfilePopupOpen}`);
}

function handleAddPlaceClick() {
  isAddPlacePopupOpen = true;
  console.log(`handleEditProfileClick isOpen: ${isAddPlacePopupOpen}`);
}

function App() {
  return (
    <div className="App">

      <Header/>

      <Main handleEditAvatarClick={handleEditAvatarClick}
            handleEditProfileClick={handleEditProfileClick}
            handleAddPlaceClick={handleAddPlaceClick}/>

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
                     }
                     isOpen={isEditProfilePopupOpen}/>

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
                     }
                     isOpen={isAddPlacePopupOpen}/>

      <PopupWithForm name="delete-card" title="Вы уверены?"/>

      <PopupWithForm name="avatar" title="Обновить аватар"
                     children={
                       <>
                         <input className="popup__input popup__input_type_avatar" type="url" name="avatar" value=""
                                placeholder="Ссылка на аватар" required/>
                         <span className="popup__error"></span>
                       </>
                     }
                      isOpen={isEditAvatarPopupOpen}/>

      <ImagePopup/>

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
