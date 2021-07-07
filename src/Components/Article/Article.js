import styles from "./Article.module.scss";

function Article(props) {
	return (
		<div className={styles["article"]}>
			<div className={styles["article__img-wrapper"]}>
				<img src={props.img} className="mw-100" />
			</div>
			<div className={styles["article__content-wrapper"]}>
				<h2 className={styles["article__title"]}>{props.title}</h2>
				<h2 className={styles["article__text"]}>{props.text}</h2>
			</div>
		</div>
	);
}

export default Article;
