import React, { useState } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import TaskInput from './Components/TaskInput';
import TaskTable from './Components/TaskTable';

let loadedTasks = JSON.parse(localStorage.getItem('tasks'));
if(!loadedTasks) {
  loadedTasks = [];
}

function App() {
  const [tasks, setTasks] = useState(loadedTasks);

  function createTask(task) {
    let newTasks = [...tasks, task];

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  function completeTask(task) {
    let newTasks = tasks.map((t) => {
      return task.id === t.id ? task : t;
    })

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  function deleteTask(task) {
    let newTasks = tasks.filter((t) => {
      return task.id !== t.id;
    })

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <div className="container mt-5">
        <div className="card border-color-secondary">
            <div className="card-body p-3">
                <h1 className="m-3 text-center">Task List</h1>
                <hr />
                <h3 className="mt-4 mb-4 text-center">Our simple task list</h3>
                <TaskInput createTask={createTask} />
                <TaskTable tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
            </div>
        </div>
    </div>
  );
}

export default App;
