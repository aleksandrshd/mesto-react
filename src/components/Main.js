import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {


    Promise.all([api.getUserInfo(), api.getInitialCards()])

      .then(([userData, cards]) => {

        if (userData.name) {
          setUserName(userData.name);
        } else {
          throw new Error('Имя пользователя не было передано');
        }
        if (userData.about) {
          setUserDescription(userData.about);
        } else {
          throw new Error('Описание пользователя не было передано');
        }
        if (userData.avatar) {
          setUserAvatar(userData.avatar);
        } else {
          throw new Error('Аватар пользователя не был передан');
        }

        setCards(cards);
      })

      .catch(err => {
        console.log(`${err}`);
        props.onServerError(err);
      });

  }, [])

  return (
    <main className="content">

      <section className="profile">

        <div className="profile__avatar"
             style={{backgroundImage: `url(${userAvatar})`}}
             onClick={props.onEditAvatar}></div>
        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button"
                  type="button"
                  onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-button"
                type="button"
                onClick={props.onAddPlace}></button>

      </section>

      <section className="elements">

        <ul className="elements__list">

          {cards.map(item =>
            (<Card card={item} key={item._id} onCardClick={props.onCardClick}/>)
          )}

        </ul>

      </section>

    </main>
  );
}

export default Main;