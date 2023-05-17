import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	news: [],
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		getAllNews: (state, action) => {
			state.news.push(action.payload);
		},

		editNews: (state, action) => {
			const { title, content, url } = action.payload;

			let existNews = state.news[0].find((el) => el.url === url);

			if (existNews) {
				existNews.title = title;
				existNews.content = content;
			}
		},
	},
});

export const { getAllNews, getNewsByTitle, editNews } = newsSlice.actions;
export default newsSlice.reducer;
