import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// Pages
import Main from "./Pages/Main/Main";
import Search from "./Pages/Search/Search";
import Favorites from "./Pages/Favorites/Favorites";
import Login from "./Pages/Login/Login";
import Auth from "./Pages/Auth/Auth";
import FilmInfo from "./Pages/FilmInfo/FilmInfo";
import SearchHistory from "./Pages/SearchHistory/SearchHistory";

function App() {
	return (
		<>
			<Container>
				<Header></Header>
			</Container>

			{/* Main */}
			<Main />

			{/* Searh */}
			<Search />

			{/* Favorites */}
			<Favorites />

			{/* Login */}
			<Login />

			{/* Auth */}
			<Auth />

			{/* Film Info */}
			<FilmInfo />

			{/* Search History */}
			<SearchHistory />

			<Container>
				<Footer></Footer>
			</Container>
		</>
	);
}

export default App;
