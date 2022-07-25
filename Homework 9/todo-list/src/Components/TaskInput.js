import React, { useState } from 'react';
import Task from '../Models/Task';

export default function TaskInput(props) {
    const [taskInput, setTaskInput] = useState('');

    function onFormSubmit(event) {
        event.preventDefault();

        if(taskInput.trim() !== '') {
            let newTask = new Task(null, taskInput, false);
            props.createTask(newTask);
            setTaskInput('');
        }
    }

  return (
    <form onSubmit={onFormSubmit}>
        <div className="input-group mb-3">
            <input type="text" className="form-control p-3" placeholder="Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
            <button className="btn btn-outline-secondary" type="submit" id="create-task">+</button>
        </div>
    </form>
  )
}
