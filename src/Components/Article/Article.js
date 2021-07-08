import styles from "./Article.module.scss";

function Article({ data }) {
	const {
		title,
		overview,
		image,
	} = data

	return (
		<div className={styles["article"]}>
			<div className={styles["article__img-wrapper"]}>
				<img src={image.background} alt={title} className="mw-100" />
			</div>
			<div className={styles["article__content-wrapper"]}>
				<h2 className={styles["article__title"]}>{title}</h2>
				<h2 className={styles["article__text"]}>{overview}</h2>
			</div>
		</div>
	);
}

export default Article;
