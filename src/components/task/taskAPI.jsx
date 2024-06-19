import { createAsyncThunk } from "@reduxjs/toolkit";

let url = "http://localhost:5000/tasks"

export const getTasks = createAsyncThunk(
    "tasks/getTasks",
    async () => {
        try {
            let res = await fetch(url)
            return await res.json()
        } catch (error) {
            console.error(error)
        }
    }
) 

export const addTask1 = createAsyncThunk(
    "task/addTask1",
    async (data) => {
        try {
            let res = await fetch("http://localhost:5000/addtask", {
                method: "POST",
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