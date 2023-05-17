import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ news }) => {
	return (
		<div className="card">
			<div className="card-header">
				<img src={news.urlToImage} alt="content" />
			</div>
			<div className="card-body">
				<h4>{news.title}</h4>
				<p>{news.content}</p>
			</div>
			<Link to={`/detail/${news.title}`} className="detail-link">
				Detail
			</Link>
		</div>
	);
};

export default Card;
