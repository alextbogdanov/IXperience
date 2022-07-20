import React from 'react';

export default function TaskInput() {
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control p-3" placeholder="Task" aria-label="Task" aria-describedby="button-addon2" id="task-input" />
        <button className="btn btn-outline-secondary" type="button" id="create-task">+</button>
    </div>
  )
}
