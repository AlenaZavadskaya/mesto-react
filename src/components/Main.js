import React from 'react';

function Main() {
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__cont">
					<img className="profile__avatar" src="#" alt="Жак-Ив Кусто." />
					<div className="profile__icon"></div>
				</div>
				<div className="profile__container">
					<div className="profile__wrapper">
						<div className="profile__info">
							<h1 className="profile__name"></h1>
							<button className="edit-button" type="button"></button>
						</div>
						<p className="profile__about"></p>
					</div>
					<button className="add-button" type="button"></button>
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