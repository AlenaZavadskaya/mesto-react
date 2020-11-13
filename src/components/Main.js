import React from "react";
import api from "../utils/Api.js";
import Card from "../components/Card.js";
import currentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  // const [userName, setUserName] = React.useState();
  // const [userDescription, setUserDescription] = React.useState();
  // const [userAvatar, setUserAvatar] = React.useState();
	const [cards, setCards] = React.useState([]);
	// debugger
	const currentUser = React.useContext(currentUserContext);
// console.log(currentUser.name, currentUser.about)

  // React.useEffect(() => {
  //   api
  //     .getUserData()
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserDescription(data.about);
  //       setUserAvatar(data.avatar);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка: ${err}`);
  //     });
  // }, []);

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

debugger
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
              key={card._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
