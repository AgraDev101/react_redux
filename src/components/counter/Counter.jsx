import { counterState, increment, decrement, incrementByValue } from "./counterSlice"
import { useSelector, useDispatch } from "react-redux"

const Counter = () => {
    const { num, num3 } = useSelector(counterState)

    let dispatch = useDispatch()

    console.log(num)


    return (
        <div>
            <h1>Counter</h1>
            <h1>{num}</h1>
            <button onClick={() => dispatch(increment())} >Add 1</button>
            <button onClick={() => dispatch(decrement())} >Minus 1</button>
            <button onClick={() => dispatch(incrementByValue({ num1: 2, num2: 5 }))} >Value</button>
        </div>
    )
}

export default Counter