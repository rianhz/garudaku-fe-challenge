import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getAllNews } from "./features/newSlice";
import "./App.scss";
import ListNews from "./pages/ListPages/ListNews";
import Detail from "./pages/DetailPages/Detail";
import EditPages from "./pages/EditPages/EditPages";

function App() {
	const dispatch = useDispatch();

	const fetchApi = async () => {
		const fetching = await axios.get(
			`${process.env.REACT_APP_URL}/everything?q=bitcoin&pageSize=15&apiKey=${process.env.REACT_APP_APIKEY}`
		);

		const result = await fetching.data.articles;
		dispatch(getAllNews(result));
	};

	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<ListNews />} />
				<Route path="/detail/:title" element={<Detail />} />
				<Route path="/edit/:title" element={<EditPages />} />
			</Routes>
		</div>
	);
}

export default App;
