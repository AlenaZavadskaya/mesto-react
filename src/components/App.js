import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithSubmit from './PopupWithSubmit';
import Card from './Card';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';



function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


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
		}
	

  return (
		<>
			<Header />
			<Main onEditProfile={handleProfilePopup} onEditAvatar={handleAvatarPopupOpen} onAddPlace={handlePlacePopupOpen} />
			<Card />
			<Footer />
			<PopupWithForm
				name="popupProfile"
				id="form-edit"
				title="Редактировать профиль"
				button="Сохранить"
				isOpen={isEditProfilePopupOpen}
				onSubmit=""
				onClose={closeAllPopups}></PopupWithForm>
			<PopupWithForm
				name="popupPlace"
				id="form-card"
				title="Новое место"
				button="Создать"
				isOpen={isAddPlacePopupOpen}
				onSubmit=""
				onClose={closeAllPopups}></PopupWithForm>
			<PopupWithForm
				name="popupAvatar"
				id="form-avatar"
				title="Обновить аватар"
				button="Сохранить"
				isOpen={isEditAvatarPopupOpen}
				onSubmit=""
				onClose={closeAllPopups}></PopupWithForm>
			<ImagePopup />
			<PopupWithSubmit />
		</>
  );
}

export default App;
