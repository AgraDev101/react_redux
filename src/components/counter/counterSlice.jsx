import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.num = state.num + 1
        },
        decrement: (state) => {
            state.num = state.num - 1
        },
        incrementByValue: (state, actions) => {
            console.log(actions);
            state.num = state.num + actions.payload.num1
        }
    }
})

export default counterSlice.reducer
export const counterState = (state) => state.counter
export const { increment, decrement, incrementByValue } = counterSlice.actions

