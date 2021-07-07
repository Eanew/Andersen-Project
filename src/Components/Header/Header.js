import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Button, ButtonGroup } from "react-bootstrap";
import Account from "../Account/Account";
import { NavLink } from "react-router-dom";

function Header(props) {
	return (
		<header>
			<Navbar>
				<Container>
					<NavLink to="/" className="navbar-brand">
						FilmLogo
					</NavLink>

					<Navbar.Toggle aria-controls="header-nav" />
					<Navbar.Collapse id="header-nav">
						<Nav>
							<NavLink to="/favorites" className="nav-link">
								Favorites
							</NavLink>
							<NavLink to="/searchhistory" className="nav-link">
								Search History
							</NavLink>
						</Nav>
					</Navbar.Collapse>

					<ButtonGroup aria-label="Basic example">
						<NavLink to="/Login" className="btn btn-secondary me-2">
							Login
						</NavLink>
						<NavLink to="/Auth" className="btn btn-secondary secondary">
							Register
						</NavLink>
					</ButtonGroup>

					<Account name="UserName"> </Account>
				</Container>
			</Navbar>
		</header>
	);
}
export default Header;
