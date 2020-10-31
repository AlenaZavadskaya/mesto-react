import React from 'react';

function PopupImage() {
	return (
		<section className="popup popup-image" id="popupImage">
		<div className="popup-image__container">
			<button className="popup__close popup-image__close" type="button"></button>
			<figure>
				<img className="popup-image__img" src="#" alt="" />
				<figcaption className="popup-image__title"></figcaption>
			</figure>
		</div>
	</section>
	);
}
	
export default PopupImage;