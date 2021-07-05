import "./FilmInfo.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Article from "./../../Components/Article/Article";

function FilmInfo(props) {
	return (
		<>
			<Container>
				<Row>
					<Col xs={12}>
						<Article
							img="http://vadimsib.ru/block_img/8.jpg"
							title="Заголовок карточки"
							text="Таким образом постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Задача организации выполнена в полной мере."
							genre="Для лохов"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FilmInfo;
