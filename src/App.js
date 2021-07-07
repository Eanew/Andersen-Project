import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Route
import { Route } from "react-router-dom";

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
		<div className="wrapper">
			<Container>
				<Header></Header>
			</Container>

			<main>
				<Route path="/" exact component={Main} />
				<Route path="/Search" exact component={Search} />
				<Route path="/Favorites" exact component={Favorites} />
				<Route path="/Login" exact component={Login} />
				<Route path="/Auth" exact component={Auth} />
				<Route path="/FilmInfo" exact component={FilmInfo} />
				<Route path="/SearchHistory" exact component={SearchHistory} />
				<Route path="/film/:id" exact component={FilmInfo} />
			</main>

			<Container>
				<Footer></Footer>
			</Container>
		</div>
	);
}

export default App;
