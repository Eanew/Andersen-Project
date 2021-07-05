import "./InputSearch.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function InputSearch(props) {
	return (
		<>
			<Form>
				<Form.Group controlId="formBasicEmail" className="mb-3">
					<Form.Label>Введите название фильма</Form.Label>
					<Form.Control type="email" placeholder="Название фильма" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Искать
				</Button>
			</Form>
		</>
	);
}

export default InputSearch;
