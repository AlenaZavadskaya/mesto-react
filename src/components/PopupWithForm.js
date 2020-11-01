import React from 'react';

function PopupWithForm(props) {
	return (
		<section className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={props.name}>
			<div className="popup__container">
	<button className="popup__close" type="button" onClick={props.onClose}></button>
			<form className="form" id={props.id} action="URL" noValidate>
				<div className="form__container">
					<h2 className="form__heading">{props.title}</h2>
						<fieldset className="form__input-container">
							{props.children}
						{/* <label className="form__field"><input id={props.id} onChange={props.handleChange} className="form__item" type="text"
								value="" name={props.name} placeholder={props.placeholder} minLength="2" maxLength="40" required />
							<span id={props.id} className="form__item-error"></span></label>
						<label className="form__field"><input id={props.id} onChange={props.handleChange} className="form__item"
								type={props.type} value="" name={props.name} placeholder={props.placeholder} minLength="2" maxLength="200"
								required />
							<span id={props.id} className="form__item-error"></span></label> */}
						<div className="form__handlers">
							<button className="submit__button" type="submit" onSubmit={props.handleClick}>{props.button}</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	</section>
	);
}
	
export default PopupWithForm;