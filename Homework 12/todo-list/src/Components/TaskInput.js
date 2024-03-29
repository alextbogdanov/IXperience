import React, { useState } from 'react';

import Task from '../Models/Task';

import Spinner from '../Components/Spinner';

export default function TaskInput(props) {
    const [taskInput, setTaskInput] = useState('');
    const [loading, setLoading] = useState(false);

    async function onFormSubmit(event) {
        event.preventDefault();

        if(taskInput.trim() !== '') {
            let newTask = new Task({
                id: null,
                name: taskInput,
                complete: false,
                userId: props.user.uid
            });

            setLoading(true);
            try {
                await props.createTask(newTask);
                setTaskInput('');
            } catch(err) {
                // Handle error
                console.log(err);
            }
            setLoading(false);
        }
    }

  return (
    <form onSubmit={onFormSubmit}>
        <div className="input-group mb-3">
            <input type="text" className="form-control p-3" placeholder="Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
            <button className="btn btn-outline-secondary" type="submit" id="create-task">
                {loading ? <Spinner /> : '+' }
            </button>
        </div>
    </form>
  )
}
