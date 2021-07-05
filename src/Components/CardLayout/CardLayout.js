import { Container, Row, Col } from "react-bootstrap";
import "./CardLayout.scss";

function CardLayout(props) {
	return (
		<>
			<Container>
				<Row>
					<Col>{props.children}</Col>
				</Row>
			</Container>
		</>
	);
}

export default CardLayout;
