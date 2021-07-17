import uuid from "react-uuid";

function TaskAdd({newTask, setNewTask, tasks, setTasks}){

    return(
        <form className="taskAdd">
            <input onChange={e => setNewTask({value: e.target.value, uid: uuid()})} type="text" placeholder="what needs to be done?" value={newTask.value}/>
            <button onClick={e => {
                e.preventDefault();
                if (newTask.value === "") return;
                setTasks([...tasks, newTask]);
                setNewTask({value: ""})}}>+</button>
        </form>
    );
}

export default TaskAdd;