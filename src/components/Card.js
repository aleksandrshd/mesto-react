function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__card">
      <button className="elements__delete-button" type="button"></button>
      <img className="elements__image"
           src={props.card.link}
           alt={props.card.name}
           onClick={handleClick}/>
      <div className="elements__container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div>
          <button className="elements__like-button" type="button"></button>
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;