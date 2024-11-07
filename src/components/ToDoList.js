import React, { useState } from "react";
import toDoListData from "../toDoListData";

function ToDoList() {
    // Initialize state with the imported to-do list data
    const [tasks, setTasks] = useState(toDoListData);

    // Function to toggle the 'done' status of a task
    const handletoggleDone = (list) => {
        // Map over the tasks array and toggle the 'done' status of the task at the specified index
        const newTasks = tasks.map((prevtask, i) => 
            i === list ? { ...prevtask, done: !prevtask.done } : prevtask
        );
        // Update the state with the new tasks array
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
                        // Render each task as a list item
                        <li key={list} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {/* Checkbox to toggle the 'done' status */}
                            <input type="checkbox" checked={task.done} onChange={() => handletoggleDone(list)} />
                            {/* Task name */}
                            <span>{task.name}</span>
                            {/* Task description */}
                            <p>{task.description}</p>
                            {/* Task due time */}
                            <p>Due: {task.timeDue}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
