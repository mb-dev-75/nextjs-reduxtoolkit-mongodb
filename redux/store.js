import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import tasksReducer from './features/tasksSlice';
import taskReducer from './features/taskSlice';


const makeStore = () => configureStore({
    reducer: {
        tasks: tasksReducer,
        task: taskReducer,
    },
    devtools: true
})


export const wrapper = createWrapper(makeStore)
