import React from 'react';

function PopupAvatar() {
	return (
		<section class="popup popup-avatar" id="popupAvatar">
		<div class="popup__container">
			<button class="popup__close" type="button" id="popupAvatarClose"></button>
			<form class="form" action="URL" id="form-avatar" novalidate>
				<div class="form__container">
					<h2 class="form__title">Обновить аватар</h2>
					<fieldset class="form__input-container">
						<label class="form__field form__field-info"><input id="url-input" class="form__item form__item_avatar form__item_link"
								type="url" value="" name="link" placeholder="Ссылка на картинку" required />
							<span id="url-input-error" class="form__item-error"></span></label>
						<div class="form__handlers">
							<button class="submit__button" id="addAvatar" type="submit">Сохранить</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</section>
	);
}
	
export default PopupAvatar;