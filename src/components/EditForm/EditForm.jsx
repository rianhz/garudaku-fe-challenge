import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./editForm.scss";
import { editNews } from "../../features/newSlice";

const EditForm = () => {
	const { title } = useParams();

	const store = useSelector((state) => state.news[0]);
	const dispatch = useDispatch();

	const [inputTitle, setInputTitle] = useState("");
	const [contents, setContents] = useState("");
	const [urls, setUrls] = useState("");

	const navigate = useNavigate();

	const findNews = () => {
		const data = store.find((el) => el.title === title);

		setInputTitle(data.title);
		setContents(data.content);
		setUrls(data.url);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setTimeout(() => {
			dispatch(
				editNews({
					title: inputTitle,
					content: contents,
					url: urls,
				})
			);
			navigate("/");
		}, 1500);
	};

	useEffect(() => {
		findNews();
	}, []);

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h2>Edit Form</h2>

				<div className="input-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						name="title"
						onChange={(e) => setInputTitle(e.target.value)}
						value={inputTitle}
					/>
				</div>

				<div className="input-group">
					<label htmlFor="content">Content</label>
					<textarea
						rows={6}
						type="text"
						id="content"
						onChange={(e) => setContents(e.target.value)}
						value={contents}
					/>
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default EditForm;
