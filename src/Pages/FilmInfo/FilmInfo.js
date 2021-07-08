import "./FilmInfo.scss";

import { Operation, OperationType as Type, Selector } from "../../reducers/data/slice.js"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Article from "./../../Components/Article/Article";

function FilmInfo() {
	const dispatch = useDispatch()
	const movieById = useSelector(Selector.movieById)
	const { id } = useParams()

	useEffect(() => id && dispatch(Operation[Type.LOAD_MOVIE_BY_ID]({ id })), [id, dispatch])

	return (
		<>
			<Container>
				<Row>
					<Col xs={12}>
						{movieById && <Article data={movieById} />}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FilmInfo;
