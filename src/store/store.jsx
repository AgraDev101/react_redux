import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counter/counterSlice";
import tasksSlice from "../components/task/taskSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        tasks: tasksSlice
    }
})

export default store