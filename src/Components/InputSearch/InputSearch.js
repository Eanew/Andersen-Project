import "./InputSearch.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function InputSearch(props) {
	return (
		<>
			<Form>
				<Form.Group controlId="formBasicEmail" className="mb-3">
					<Form.Label>Type film title</Form.Label>
					<Form.Control type="text" placeholder="Film title" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Search
				</Button>
			</Form>
		</>
	);
}

export default InputSearch;
