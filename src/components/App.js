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
	
	const childrenProfilePopup =
			<>
			<label className="form__field"><input id="name-input" className="form__item form__item_name" type="text"
								value="" name="full_name" placeholder="Имя" minLength="2" maxLength="40" required />
							<span id="name-input-error" className="form__item-error"></span></label>
						<label className="form__field form__field-info"><input id="about-input" className="form__item form__item_about"
								type="text" value="" name="about" placeholder="О себе" minLength="2" maxLength="200"
								required />
					<span id="about-input-error" className="form__item-error"></span></label>
				</>


	const childrenPlacePopup = 
			<>
			<label className="form__field"><input id="title-input" className="form__item form__item_title" type="text" value=""
								name="title" placeholder="Название" minLength="1" maxLength="30" required />
							<span id="title-input-error" className="form__item-error"></span></label>
						<label className="form__field form__field-info"><input id="url-input" className="form__item form__item_link"
								type="url" value="" name="link" placeholder="Ссылка на картинку" required />
							<span id="url-input-error" className="form__item-error"></span></label>
				</>
		

	const childrenAvatarPopup =
			<>
			<label className="form__field form__field-info"><input id="url-input" className="form__item form__item_avatar form__item_link"
								type="url" value="" name="link" placeholder="Ссылка на картинку" required />
							<span id="url-input-error" className="form__item-error"></span></label>
				</>

	

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
				onClose={closeAllPopups}>{childrenProfilePopup}</PopupWithForm>
			<PopupWithForm
				name="popupPlace"
				id="form-card"
				title="Новое место"
				button="Создать"
				isOpen={isAddPlacePopupOpen}
				onSubmit=""
				onClose={closeAllPopups}>{childrenPlacePopup}</PopupWithForm>
			<PopupWithForm
				name="popupAvatar"
				id="form-avatar"
				title="Обновить аватар"
				button="Сохранить"
				isOpen={isEditAvatarPopupOpen}
				onSubmit=""
				onClose={closeAllPopups}>{childrenAvatarPopup}</PopupWithForm>
			<ImagePopup />
			<PopupWithSubmit />
		</>
  );
}

export default App;
