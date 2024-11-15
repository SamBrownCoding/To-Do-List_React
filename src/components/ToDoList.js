import React, { useState } from "react";
import InputTask from "./InputTask";

function ToDoList() {
    // Initialize state with the imported to-do list data
    const [tasks, setTasks] = useState([]);

    // Function to toggle the 'done' status of a task
    const handleToggleDone = (taskIndex) => {
        // Map over the tasks array and toggle the 'done' status of the task at the specified index
        const newTasks = tasks.map((prevtask, i) => 
            i === taskIndex ? { ...prevtask, done: !prevtask.done } : prevtask
        );
        // Update the state with the new tasks array
        setTasks(newTasks);
    };

    const addTask= (newList) => {
        setTasks([...tasks, newList])
    };

    const delTask = (taskIndex) => {
        const newTasks = tasks.filter((_,i) => i !== taskIndex);
        // console.log(newTasks);
        setTasks(newTasks);
    };

    return (
        <div className="col-12">
            <InputTask addTask={addTask} />
            <div className="list">
                <ul>
                    {tasks.map((task, taskIndex) => (
                        // Render each task as a index item
                        <li key={taskIndex}>
                            <div className="d-flex align-items-center col-3" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {/* Checkbox to toggle the 'done' status */}
                            <input type="checkbox" checked={task.done} onChange={() => handleToggleDone(taskIndex)} />

                            {/* Task name */}
                            <span>{task.name}</span>
                            
                            {/* Task description */}
                            <p>{task.description}</p>

                            {/* Task due time */}
                            <p>Due: {task.timeDue}</p>
                            </div>

                            {/* Task Delete Button */}
                            <button className="deleteBtn" style={{ textDecoration: 'none' }} onClick={() => delTask(taskIndex)} >Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
