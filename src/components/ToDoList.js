import React, { useState } from "react";
import toDoListData from "../toDoListData";


function ToDoList() {
    const [tasks, setTasks] = useState(toDoListData);

    const handletoggleDone = (list) => {
        const newTasks = tasks.map((prevtask, i) => i === list ? { ...prevtask, done: !prevtask.done } : prevtask
        );
        setTasks(newTasks);
    }

    return (
        <div className="col-12 text-center">
            <div className="row">
                <div className="col-12">
                    <h1>To Do List</h1>
                </div>
            </div>
            <div className="list">
                <ul>
                    {tasks.map((task, list) => (
                        <li key={list} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>

                            <input type="checkbox" checked={task.done} onChange={() => handletoggleDone(list)} />
                            <span>{task.name}</span>
                            <p>{task.description}</p>
                            <p>Due: {task.timeDue}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}


export default ToDoList;