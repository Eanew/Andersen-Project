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
				<Route path="/:category" exact component={Main} />
				<Route path="/search" exact component={Search} />
				<Route path="/search/:title" exact component={Search} />
				<Route path="/film/:id" exact component={FilmInfo} />
				<Route path="/auth" exact component={Auth} />
				<Route path="/login" exact component={Login} />
				<Route path="/favorites" exact component={Favorites} />
				<Route path="/searchHistory" exact component={SearchHistory} />
				{/* <Route path="/filmInfo" exact component={FilmInfo} /> */}
			</main>

			<Container>
				<Footer></Footer>
			</Container>
		</div>
	);
}

export default App;
