import styles from "./Auth.module.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login(props) {
	return (
		<>
			<Container>
				<Row>
					<Col md={6}>
						<h2 className="my-4">Authorization</h2>
						<Form>
							<Form.Group controlId="formBasicLogin" className="mb-3">
								<Form.Label>Your login</Form.Label>
								<Form.Control type="text" placeholder="Enter login" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword" className="mb-4">
								<Form.Label>Your password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Button variant="primary" type="submit">
								Войти
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Login;
