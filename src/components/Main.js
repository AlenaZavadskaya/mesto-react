import React from "react";
import api from "../utils/Api.js";
import Card from "../components/Card.js";
import currentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
	const currentUser = React.useContext(currentUserContext);
	const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
			.then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

	function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
		api.changeLikeCardStatus(card, !isLiked).then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id) ? newCard : c);
			setCards(newCards);
    }) .catch((err) => {
			console.log(`Ошибка: ${err}`);
		});
}

	function handleCardDelete(card) {
		api.deleteCard(card).then(() => {
			// debugger
			const newArr = cards.filter(i => i._id !== card._id);
			setCards(newArr);
		})
	}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cont" onClick={props.onEditAvatar}>
          <div
            className="profile__avatar"
            style={{
              backgroundImage: `url(${currentUser.avatar})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="profile__icon"></div>
        </div>
        <div className="profile__container">
          <div className="profile__wrapper">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="edit-button"
                type="button"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
          <button
            className="add-button"
            type="button"
            onClick={props.onAddPlace}
          />
        </div>
      </section>
      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => (
						<Card
              card={card}
              name={card.name}
              link={card.link}
							likes={card.likes}
							ownerId={card.owner._id}
              key={card._id}
							onCardClick={props.onCardClick}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
							id={card.id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
