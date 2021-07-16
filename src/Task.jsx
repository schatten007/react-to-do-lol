import {useState} from "react";

function Task({taskVal, id, tasks, setTasks, totalDone, setTotalDone}){
    const [edit, setEdit] = useState(taskVal);
    const [editable, setEditable] = useState(true);
    return(
        <form>
            <input type="checkbox" onChange={(e)=> (e.target.checked) ? setTotalDone(++totalDone) : setTotalDone(--totalDone)}/>
            <input disabled={editable} onChange={e => setEdit(e.target.value)} type="text" value={edit}/>
            <button onClick={(e) => {
                e.preventDefault();
                setEditable(!editable)}}>Edit</button>
            <button onClick={e => {
                e.preventDefault();
                setTasks(tasks.filter(task => task.uid !== id));
            }}>Delete</button>
        </form>
    );
}

export default Task;