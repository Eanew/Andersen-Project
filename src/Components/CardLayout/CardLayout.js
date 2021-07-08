import { Container, Row, Col } from "react-bootstrap";
import Card from "./../../Components/Card/Card";
import "./CardLayout.scss";

function CardLayout(props) {
	return (
		<Container>
			<Row className="my-5">
				{props.cards.map((item, idx) => (
					<Col md={6} lg={4} xl={3} className="mb-4">
						<Card
							imgPath={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
							title={item.title}
							text={item.overview}
							buttonLink={item.buttonLink}
							isFavorite={item.isFavorite}
							id={item.id}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default CardLayout;
