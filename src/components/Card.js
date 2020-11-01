import React from 'react';

function Card(props) {
	

	return (
		<template id="element-template">
		<li className="element">
			<img className="element__image" src={props.src} alt={props.alt} />
			<button className="element__delete" type="reset"></button>
			<div className="element__name">
					<h2 className="element__title">{props.title}</h2>
				<div className="element__container">
						<button className="element__like" type="button">{props.like}</button>
						<div className="element__counter">{props.counter}</div>
			</div>
			</div>
		</li>
	</template>
	);
}
	
export default Card;