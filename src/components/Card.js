function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="elements__card">
      <button className={props.cardDeleteButtonClassName} type="button"
      onClick={handleDeleteClick}></button>
      <img className="elements__image"
           src={props.card.link}
           alt={props.card.name}
           onClick={handleClick}/>
      <div className="elements__container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div>
          <button className={props.cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;