import React from 'react';
import api from '../utils/Api.js'
import Card from '../components/Card.js';
import App from '../components/App'

function Main(props) {
	const [userName, setUserName] = React.useState();
	const [userDescription, setUserDescription] = React.useState();
	const [userAvatar, setUserAvatar] = React.useState();
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getUserData().then(data => {
			console.log(data);
			setUserName(data.name);
			setUserDescription(data.about);
			setUserAvatar(data.avatar);
		})
	}, [])

	React.useEffect(() => {
		api.getInitialCards()
			.then(data => {
			console.log(data);
				setCards(data);
			})
	}, [])
// debugger
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__cont">
					<div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /*src={`img/${userAvatar}.png`} alt={props.name} onClick={props.onEditAvatar}*/ />
					<div className="profile__icon"></div>
				</div>
				<div className="profile__container">
					<div className="profile__wrapper">
						<div className="profile__info">
							<h1 className="profile__name">{userName}</h1>
							<button className="edit-button" type="button" onClick={props.onEditProfile}></button>
						</div>
						<p className="profile__about">{userDescription}</p>
					</div>
					<button className="add-button" type="button" onClick={props.onAddPlace}></button>
				</div>
			</section>
			<section className="elements">
				<ul className="elements__container">
						{cards.map((card) => (<Card card={card} name={card.name} link={card.link} likes={card.likes} key={card._id} />))}	
				</ul>
			</section>
		</main>	
	);
}


export default Main;
