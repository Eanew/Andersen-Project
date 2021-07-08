import "./Search.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import InputSearch from "./../../Components/InputSearch/InputSearch";
import CardLayout from "../../Components/CardLayout/CardLayout";

import { Operation, OperationType as Type, Selector } from "../../reducers/data/slice.js"

function Search() {
	const dispatch = useDispatch()
	const moviesByTitle = useSelector(Selector.moviesByTitle)
	const { title } = useParams()

	useEffect(() => title && dispatch(Operation[Type.LOAD_MOVIES_BY_TITLE]({ title })), [title, dispatch])

	return (
		<>
			<Container>
				<h1>Search results</h1>
				<InputSearch />
			</Container>

			<CardLayout cards={moviesByTitle} />
		</>
	);
}

export default Search;
