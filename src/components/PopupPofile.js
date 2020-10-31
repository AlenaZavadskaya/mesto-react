import React from 'react';

function PopupProfile() {
	return (
		<section className="popup" id="popupProfile">
		<div className="popup__container">
			<button className="popup__close" type="button"></button>
			<form className="form" id="form-edit" action="URL" novalidate>
				<div className="form__container">
					<h2 className="form__heading">Редактировать профиль</h2>
					<fieldset className="form__input-container">
						<label className="form__field"><input id="name-input" className="form__item form__item_name" type="text"
								value="" name="full_name" placeholder="Имя" minlength="2" maxlength="40" required />
							<span id="name-input-error" className="form__item-error"></span></label>
						<label className="form__field form__field-info"><input id="about-input" className="form__item form__item_about"
								type="text" value="" name="about" placeholder="О себе" minlength="2" maxlength="200"
								required />
							<span id="about-input-error" className="form__item-error"></span></label>
						<div className="form__handlers">
							<button className="submit__button" type="submit">Сохранить</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</section>
	);
}
	
export default PopupProfile;