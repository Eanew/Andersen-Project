import "./InputSearch.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function InputSearch() {
	const [inputValue, setInputValue] = useState(``)
	const history = useHistory()
	
	const onFormSubmit = (evt) => {
		evt.preventDefault()
		if (inputValue) history
			.push((history.location.pathname.indexOf(`search/`) === -1 ? `search/` : ``) + inputValue)
	}

	return (
		<>
			<Form onSubmit={onFormSubmit}>
				<Form.Group controlId="formBasicEmail" className="mb-3">
					<Form.Label>Type film title</Form.Label>
					<Form.Control
						value={inputValue}
						onChange={(evt) => setInputValue(evt.target.value)}
						type="text"
						placeholder="Film title"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Search
				</Button>
			</Form>
		</>
	);
}

export default InputSearch;
