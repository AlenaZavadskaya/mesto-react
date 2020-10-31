import React from 'react';

function PopupPlace() {
	return (
		<section className="popup" id="popupPlace">
		<div className="popup__container">
			<button className="popup__close" type="button" id="popupPlaceClose"></button>
			<form className="form" action="URL" id="form-card" novalidate>
				<div className="form__container">
					<h2 className="form__title">Новое место</h2>
					<fieldset className="form__input-container">
						<label className="form__field"><input id="title-input" className="form__item form__item_title" type="text" value=""
								name="title" placeholder="Название" minlength="1" maxlength="30" required />
							<span id="title-input-error" className="form__item-error"></span></label>
						<label className="form__field form__field-info"><input id="url-input" className="form__item form__item_link"
								type="url" value="" name="link" placeholder="Ссылка на картинку" required />
							<span id="url-input-error" className="form__item-error"></span></label>
						<div className="form__handlers">
							<button className="submit__button" id="addCard" type="submit">Создать</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</section>
	);
}
	
export default PopupPlace;