import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./detail.scss";

const Detail = () => {
	const { title } = useParams();

	const store = useSelector((state) => state.news[0]);
	const [news, setNews] = useState({});

	const findNews = () => {
		const data = store.find((el) => el.title === title);
		setNews(data);
	};

	useEffect(() => {
		findNews();
	}, []);

	return (
		<div className="container">
			<div className="detail-wrapper">
				<div className="image-detail-wrapper">
					<img src={news.urlToImage} alt="content" />
				</div>
				<div className="detail-text">
					<h2>{news.title}</h2>
					<hr />
					<p>{news.content}</p>
					<Link to={`/edit/${news.title}`}>Edit</Link>
				</div>
			</div>
		</div>
	);
};

export default Detail;
