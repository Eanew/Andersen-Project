import "./Main.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

//Components
import InputSearch from "./../../Components/InputSearch/InputSearch";
import Card from "./../../Components/Card/Card";
import CardLayout from "../../Components/CardLayout/CardLayout";

const cards = [
	{
		id: 581726,
		backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
		title: "Заголовок карточки 1",
		overview: "Разнообразный и богатый опыт начало повседневной",
		release_date: "2021-09-08",
		buttonLink: "#btn1",
		isFavorite: false
	},
	{
		id: 581727,
		backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
		title: "Заголовок карточки 1",
		overview:
			"Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий.",
		release_date: "2021-09-08",
		buttonLink: "#btn1",
		isFavorite: false
	},
	{
		id: 581728,
		backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
		title: "Заголовок карточки 1",
		overview:
			"Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий.",
		release_date: "2021-09-08",
		buttonLink: "#btn1",
		isFavorite: false
	}
];

function Main(props) {
	return (
		<>
			<Container>
				<InputSearch />
			</Container>

			<CardLayout cards={cards} />
		</>
	);
}

export default Main;
