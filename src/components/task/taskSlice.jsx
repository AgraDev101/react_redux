import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks, addTask1 } from "./taskAPI";


const initialState = {
    tasks: [],
    loading: false
}

let url = "http://localhost:5000/tasks"

export const deleteTask1 = createAsyncThunk(
    "task/deleteTask1",
    async (data) => {
        try {
            let res = await fetch("http://localhost:5000/deletetask", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await res.json()
        } catch (error) {
            console.error(error)
        }
    }
)

export const updateTask1 = createAsyncThunk(
    "task/updateTask1",
    async (data) => {
        try {
            let res = await fetch("http://localhost:5000/updatetask", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await res.json()
        } catch (error) {
            console.error(error)
        }
    }
)

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, actions) => {
            state.tasks.push(actions.payload)
        },
        deleteTask: (state, actions) => {
            const id = actions.payload.id
            state.tasks = state.tasks.filter((task) => task.taskId !== id)
        },
        updateTask: (state, actions) => {
            const { id, task } = actions.payload
            const update = state.tasks.find((task) => task.taskId == id)
            if (update) {
                update.task = task
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, actions) => {
            state.tasks = actions.payload.data
        })
        builder.addCase(getTasks.rejected, (state, actions) => {
            state.loading = false
        })
        builder.addCase(deleteTask1.fulfilled, (state, actions) => {
            state.tasks = state.tasks.filter((task) => task.taskId !== actions.payload.data)
            state.loading = false
        })
        builder.addCase(deleteTask1.pending, (state, actions) => {
            state.loading = true
        })
        builder.addCase(deleteTask1.rejected, (state, actions) => {
            state.loading = false
        })
        builder.addCase(addTask1.fulfilled, (state, actions) => {
            state.tasks.push(actions.payload.data)
            console.log(actions.payload.data)
            state.loading = false
        })
        builder.addCase(addTask1.pending, (state, actions) => {
            state.loading = true
        })
        builder.addCase(updateTask1.fulfilled, (state, actions) => {
            // state.tasks.push(actions.payload.data)
            console.log(actions.payload)
        })
    }
})

export default tasksSlice.reducer
export const tasksState = (state) => state.tasks
export const { addTask, deleteTask, updateTask } = tasksSlice.actions