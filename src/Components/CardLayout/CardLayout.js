import { Container, Row, Col } from "react-bootstrap";
import Card from "./../../Components/Card/Card";
import "./CardLayout.scss";

function CardLayout({ cards }) {
	return (
		<Container>
			<Row className="my-5">
				{cards && cards.map((card) => (
					<Col key={cards.id} md={6} lg={4} xl={3} className="mb-4">
						<Card
							data={cards}
							isFavorite={Boolean(Math.round(Math.random()))}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default CardLayout;
