import './App.css'
import Counter from './components/counter/Counter'
import Task from './components/task/Task'

function App() {

  // let xyz = x => x = y => y = "value"
  // console.log(xyz()())

// let xyz = (x) => x => x + 1
// console.log(xyz()(1))

  return (
    <>
      {/* <Counter /> */}
      <Task />
    </>
  )
}

export default App