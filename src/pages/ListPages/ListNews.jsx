import React from "react";
import "./list.scss";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

const ListNews = () => {
	const news = useSelector((state) => state.news[0]);

	return (
		<>
			<h1>News </h1>
			<div className="card-wrapper">
				{news?.map((el, i) => {
					return <Card key={i} news={el} />;
				})}
			</div>
		</>
	);
};

export default ListNews;
