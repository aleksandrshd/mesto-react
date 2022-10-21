import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);



  return (
    <main className="content">

      <section className="profile">

        <div className="profile__avatar"
             style={{backgroundImage: `url(${currentUser.avatar})`}}
             onClick={props.onEditAvatar}></div>
        <div className="profile__description">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button"
                  type="button"
                  onClick={props.onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button"
                type="button"
                onClick={props.onAddPlaceClick}></button>

      </section>

      <section className="elements">
        <ul className="elements__list">
          {props.cards.map(card => {
              const isOwn = card.owner._id === currentUser._id;
              const cardDeleteButtonClassName = (
                `elements__delete-button ${isOwn ? '' : 'elements__delete-button_hidden'}`
              );
              const isLiked = card.likes.some(i => i._id === currentUser._id);
              const cardLikeButtonClassName = (
                `elements__like-button ${isLiked ? 'elements__like-button_type_active' : ''}`
              );
              return (<Card card={card} key={card._id} onCardClick={props.onCardClick}
                            cardDeleteButtonClassName={cardDeleteButtonClassName}
                            cardLikeButtonClassName={cardLikeButtonClassName}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}/>)
            }
          )}
        </ul>
      </section>

    </main>
  );
}

export default Main;