import React from 'react';

function PopupAvatar() {
	return (
		<section className="popup popup-avatar" id="popupAvatar">
		<div className="popup__container">
			<button className="popup__close" type="button" id="popupAvatarClose"></button>
			<form className="form" action="URL" id="form-avatar" novalidate>
				<div className="form__container">
					<h2 className="form__title">Обновить аватар</h2>
					<fieldset className="form__input-container">
						<label className="form__field form__field-info"><input id="url-input" className="form__item form__item_avatar form__item_link"
								type="url" value="" name="link" placeholder="Ссылка на картинку" required />
							<span id="url-input-error" className="form__item-error"></span></label>
						<div className="form__handlers">
							<button className="submit__button" id="addAvatar" type="submit">Сохранить</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</section>
	);
}
	
export default PopupAvatar;