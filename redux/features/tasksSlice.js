import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";


const baseUri = "http://localhost:3000";


// Read Tasks
export const readTasks = createAsyncThunk("tasks/readTasks", async () => {
    try {
        const response = await axios.get(`${baseUri}/api/tasks`);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
});


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        loading: null,
        success: null,
        message: null
    },
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, { payload }) => {
            return {
                ...state,
                ...payload.tasks,
            };
        },
        [readTasks.pending]: (state) => {
            state.loading = true;
        },
        [readTasks.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tasks = payload.tasks;
            state.success = true;
        },
        [readTasks.rejected]: (state, { payload }) => {
            state.loading = false;
            state.message = payload;
        },
    },
});

export default tasksSlice.reducer;
