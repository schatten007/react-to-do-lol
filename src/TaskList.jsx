import Task from "./Task";

function TaskList({tasks, setTasks, totalDone, setTotalDone}){
    return(
        <div className="taskList">
            {tasks.map(task => <Task  taskVal={task.value} id={task.uid} tasks={tasks} setTasks={setTasks} 
            totalDone={totalDone} setTotalDone={setTotalDone} key={task.uid}/>)}
        </div>
    );
}

export default TaskList;