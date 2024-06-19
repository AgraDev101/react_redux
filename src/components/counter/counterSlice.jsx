import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 0,
    num3: 1
}

const counterSlice = createSlice({
    name: "counter",
    reducers: {
        increment: (state) => {
            state.num = state.num + 1
        },
        decrement: (state) => {
            state.num = state.num - 1
        },
        incrementByValue: (state, actions) => {
            console.log(actions);
            let { num1, num2 } = actions.payload

            state.num = state.num + actions.payload
        }
    }
})

export default counterSlice.reducer
export const counterState = (state) => state.counter
export const { increment, decrement, incrementByValue } = counterSlice.actions

