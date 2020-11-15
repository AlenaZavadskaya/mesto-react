import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithSubmit from "./PopupWithSubmit";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";
import currentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
	const [selectedCard, setSelectedCard] = React.useState({});

	const [currentUser, setCurrentUser] = React.useState({});

	React.useEffect(() => {
    api
      .getUserData()
			.then((data) => {
				// debugger
				setCurrentUser({name: data.name, about: data.about, avatar: data.avatar, _id: data._id});
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
	}, []);
	

	// const [isSubmited, setIsSumbited] = React.useState(false);
	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	// props.onUpdateUser({
	// 	// 	name,
	// 	// 	about: description,
	// 	// });
	// }

	function handleUpdateUser(currentUser) {
    api.setUserInfo(currentUser)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
  }

	function handleUpdateAvatar(currentUser) {
		api.setUserAvatar(currentUser)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
	}

  function handleProfilePopup() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handlePlacePopupOpen() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
    setSelectedCard({});
  }

  const childrenPlacePopup = (
    <>
      <label className="form__field">
        <input
          id="title-input"
          className="form__item form__item_title"
          type="text"
          name="title"
          placeholder="Название"
          minLength="1"
					maxLength="30"
					// value="value"
          required
        />
        <span id="title-input-error" className="form__item-error" />
      </label>
      <label className="form__field form__field-info">
        <input
          id="url-input"
          className="form__item form__item_link"
          type="url"
          name="link"
					placeholder="Ссылка на картинку"
					// value="value"
          required
        />
        <span id="url-input-error" className="form__item-error" />
      </label>
    </>
  );


  return (
			<currentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditProfile={handleProfilePopup}
					onEditAvatar={handleAvatarPopupOpen}
					onAddPlace={handlePlacePopupOpen}
					onCardClick={setSelectedCard}
					name = {currentUser.name}
				/>
				<Footer />
					<EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAllPopups} />
				<PopupWithForm
					name="popupPlace"
					id="form-card"
					title="Новое место"
					button="Создать"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
					{childrenPlacePopup}
			</PopupWithForm>
			<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups} />
				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
					<PopupWithSubmit />
			</currentUserContext.Provider>

  );
}

export default App;
