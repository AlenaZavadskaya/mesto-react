import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupProfile from './components/PopupPofile';
import PopupPlace from './components/PopupPlace';
import PopupImage from './components/PopupImage';
import PopupWithSubmit from './components/PopupWithSubmit';
import PopupAvatar from './components/PopupAvatar';
import Card from './components/Card';

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
