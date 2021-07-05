import "./Favorites.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "./../../Components/Card/Card";

const cards = [
	{
		id: 581726,
		backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
		title: "Заголовок карточки 1",
		overview:
			"Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание существенных финансовых и административных условий.",
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
				<h1>Избранное</h1>
				<Row className="my-5">
					{cards.map((item, idx) => (
						<Col md={6} lg={4} xl={3} className="mb-4">
							<Card
								imgPath={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
								title={item.title}
								text={item.overview}
								buttonLink={item.buttonLink}
								isFavorite={item.isFavorite}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

export default Main;
