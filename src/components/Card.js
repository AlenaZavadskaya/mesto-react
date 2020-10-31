import React from 'react';

function Card() {
	return (
		<template id="element-template">
		<li className="element">
			<img className="element__image" src="#" alt="" />
			<button className="element__delete" type="reset"></button>
			<div className="element__name">
				<h2 className="element__title"></h2>
				<div className="element__container">
				<button className="element__like" type="button"></button>
				<div className="element__counter"></div>
			</div>
			</div>
		</li>
	</template>
	);
}
	
export default Card;