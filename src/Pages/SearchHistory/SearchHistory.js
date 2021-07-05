import "./SearchHistory.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function SearchHistory(props) {
	return (
		<>
			<Container>
				<h1>История поиска:</h1>
				<Row>
					<Col>
						<ul>
							<li>
								<a href="#">Название фильма из поиска 1</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 2</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 3</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 4</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 5</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 6</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 7</a>
							</li>
							<li>
								<a href="#">Название фильма из поиска 8</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SearchHistory;
