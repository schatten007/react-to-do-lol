import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import Footer from "./Footer";
import {useState} from "react";
import uuid from "react-uuid";

function ToDoList() {
    const [newTask, setNewTask] = useState({value: "", uid:""});
    const [tasks, setTasks] = useState([{value: "Task1", uid : uuid()}]);
    const [totalDone, setTotalDone] = useState(0);

    return (
        <div className="toDoList">
            <h1>ToDoList</h1>
            <TaskAdd newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks} totalDone={totalDone} setTotalDone={setTotalDone}/>
            <Footer totalDone={totalDone} total={tasks.length}/>
        </div>
    )
}

export default ToDoList;