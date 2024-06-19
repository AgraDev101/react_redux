import { useState, useEffect } from "react"
import { tasksState } from "./taskSlice"
import { useSelector, useDispatch } from "react-redux"
import { addTask, deleteTask, updateTask, deleteTask1, updateTask1 } from "./taskSlice"
import { getTasks, addTask1 } from "./taskAPI"

const Task = () => {
    let dispatch = useDispatch()

    const [task0, setTask] = useState("")

    let { tasks, loading } = useSelector(tasksState)

    console.log(tasks)

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            // taskId: Date.now(),
            task: task0
        }
        // dispatch(addTask(newTask))
        dispatch(addTask1(newTask))
    }

    return (
        <div style={{
            maxWidth: "60%",
            margin: "40px auto"
        }}>
            <h1>Task</h1>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Task</span>
                    <input onChange={(e) => setTask(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">ADD</button>
            </form>
            {
                (loading) ? (
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ):(<table style={{
                    margin: "40px 0 0 0"
                }} className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Task</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => {
                                return (
                                    <tr key={task.taskId}>
                                        <td>{task.taskId}</td>
                                        <td>{task.task}</td>
                                        <td><button type="button" class="btn btn-danger" onClick={() => dispatch(deleteTask1({taskId: task.taskId}))}>Delete</button></td>
                                        <td>
                                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#exampleModal${task.taskId}`}>
                                            Update
                                        </button>
                                        <div class="modal fade" id={`exampleModal${task.taskId}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="inputGroup-sizing-default">Task</span>
                                                <input onChange={(e) => setTask(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                            </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button onClick={()=>action1(task)} type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>)
            }
        </div>
    )
}

export default Task