import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Button, ButtonGroup } from "react-bootstrap";
import Account from "../Account/Account";

function Header(props) {
	return (
		<header>
			<Navbar>
				<Container>
					<Navbar.Brand href="#logo">FilmLogo</Navbar.Brand>

					<Navbar.Toggle aria-controls="header-nav" />
					<Navbar.Collapse id="header-nav">
						<Nav>
							<Nav.Link href="#home">Избранное</Nav.Link>
							<Nav.Link href="#link">История</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<ButtonGroup aria-label="Basic example">
						<Button variant="secondary me-2">Login</Button>
						<Button variant="secondary">Register</Button>
					</ButtonGroup>

					<Account name="UserName"> </Account>
				</Container>
			</Navbar>
		</header>
	);
}
export default Header;
