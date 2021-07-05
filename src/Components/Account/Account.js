import "./Account.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Account(props) {
	return (
		<div className="account">
			<span className="account__name">{props.name}</span>
			<Button variant="secondary mx-2">Logout</Button>
		</div>
	);
}

export default Account;
