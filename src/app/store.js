import { configureStore } from "@reduxjs/toolkit";
import newSlice from "../features/newSlice";

export const store = configureStore({
	reducer: newSlice,
});
