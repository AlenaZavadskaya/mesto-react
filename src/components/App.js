import React from 'react';
// import '../App.css';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupProfile from './PopupPofile';
import PopupPlace from './PopupPlace';
import PopupImage from './PopupImage';
import PopupWithSubmit from './PopupWithSubmit';
import PopupAvatar from './PopupAvatar';
import Card from './Card';

function App() {
  return (
		<>
			<Header />
			<Main />
			<Card />
			<Footer />
			<PopupProfile />
			<PopupPlace />
			<PopupImage />
			<PopupWithSubmit />
			<PopupAvatar />
		</>
  );
}

export default App;
