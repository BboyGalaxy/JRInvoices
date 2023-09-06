import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
    from: dayjs().format("MM/DD/YYYY"),
    to: dayjs().format("MM/DD/YYYY"),
    historyData: []
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistoryData: (state, action) => {
            state.historyData = action.payload;
        },
        setFrom: (state, action) => {
            state.from = dayjs(action.payload).format("MM/DD/YYYY")
        },
        setTo: (state, action) => {
            state.to = dayjs(action.payload).format("MM/DD/YYYY")
        } 
    }
});

export const { setHistoryData, setFrom, setTo } = historySlice.actions;

export default historySlice.reducer;
