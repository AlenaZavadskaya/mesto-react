import React from 'react';
// import api from '../utils/Api.js'
import App from '../components/App'

function Main(props) {
	// const [userName, setUserName] = React.useState();
	// const [userDescription, setUserDescription] = React.useState();
	// const [userAvatar, setUserAvatar] = React.useState();

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__cont">
					<img className="profile__avatar" src={`img/${props.id}.png`} alt={props.name} onClick={props.onEditAvatar} />
					<div className="profile__icon"></div>
				</div>
				<div className="profile__container">
					<div className="profile__wrapper">
						<div className="profile__info">
							<h1 className="profile__name">{props.name}</h1>
							<button className="edit-button" type="button" onClick={props.onEditProfile}></button>
						</div>
						<p className="profile__about">{props.about}</p>
					</div>
					<button className="add-button" type="button" onClick={props.onAddPlace}></button>
				</div>
			</section>
			<section className="elements">
				<ul className="elements__container">
				</ul>
			</section>
		</main>	
	);
}


export default Main;
