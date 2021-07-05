import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./footer.scss";
import logo from "./logo192.png";

function Header(props) {
	return (
		<footer className="footer d-flex align-items-center">
			<Container>
				<Row className="align-center position-relative">
					<Col md={1}>
						<Image src={logo} rounded className="w-100" />
					</Col>
					<Col>
						<span className="position-absolute top-50 start-50 translate-middle">
							All right Reserved
						</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Header;
