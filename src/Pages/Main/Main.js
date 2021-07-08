import "./Main.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import InputSearch from "./../../Components/InputSearch/InputSearch";
import Card from "./../../Components/Card/Card";
import CardLayout from "../../Components/CardLayout/CardLayout";

import { MovieCategory } from "../../api.js"
import { Operation, OperationType as Type, Selector } from "../../reducers/data/slice.js"
import { useEffect } from "react";

function Main() {
	const dispatch = useDispatch()
	const moviesByCategory = useSelector(Selector.moviesByCategory)
	const { category = MovieCategory.POPULAR } = useParams()

	useEffect(() => dispatch(Operation[Type.LOAD_MOVIES_BY_CATEGORY]({ category })), [category, dispatch])

	return (
		<>
			<Container>
				<InputSearch />
			</Container>

			<CardLayout cards={cards} />
		</>
	);
}

export default Main;
