import React, { useState } from "react";

function InputTask({addTask}) {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskTime, setTaskTime] = useState('');


 //* Handle input changes
 const handleEvent = (event) => {
    const { name, value } = event.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'taskDesc') {
      setTaskDesc(value);
    } else if (name === 'taskTime') {
      setTaskTime(value);
    }
  };

  //* Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() && taskDesc.trim() && taskTime.trim()) {
            addTask({
                name: taskName,
                description: taskDesc,
                timeDue: taskTime,
                done: false,
            });
            
            //* Clear the form
            setTaskName('');
            setTaskDesc('');
            setTaskTime('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="taskName" placeholder="Task Name" value={taskName} onChange={handleEvent} />

            <input type="text" name="taskDesc" placeholder="Description" value={taskDesc} onChange={handleEvent} />

            <input type="time" name="taskTime" value={taskTime} onChange={handleEvent}  />
            <button className="addBtn" type="submit">Add Task</button>
        </form>
    )
}


export default InputTask;