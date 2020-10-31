import React from 'react';

function Card() {
	return (
		<template id="element-template">
		<li class="element">
			<img class="element__image" src="#" alt="" />
			<button class="element__delete" type="reset"></button>
			<div class="element__name">
				<h2 class="element__title"></h2>
				<div class="element__container">
				<button class="element__like" type="button"></button>
				<div class="element__counter"></div>
			</div>
			</div>
		</li>
	</template>
	);
}
	
export default Card;