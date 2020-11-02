import React from 'react';

function Card(props) {
	
	// debugger
	return (
		<li className="element"  key={props.card._id}>
				<img className="element__image" style={{ backgroundImage: `url(${props.link})` }} src={props.link} alt={props.name} />
			<button className="element__delete" type="reset"></button>
			<div className="element__name">
					<h2 className="element__title">{props.name}</h2>
				<div className="element__container">
						<button className="element__like" type="button"></button>
					<div className="element__counter">{props.likes.length}</div>
			</div>
			</div>
		</li>
	);
}
	
export default Card;