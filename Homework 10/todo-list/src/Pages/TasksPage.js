import React, { useState, useEffect } from 'react';

import TaskInput from '../Components/TaskInput';
import TaskTable from '../Components/TaskTable';

import taskService from '../Services/Task.service.js';


export default function TasksPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        readTasks();
    }, [])

    async function readTasks() {
        try {
        const rTasks = await taskService.readTasks();

        setTasks(rTasks);
        } catch(err) {
        console.log(err);
        }
    }

    async function createTask(task) {
        try {
        task = await taskService.createTask(task);

        let newTasks = [...tasks, task];
        setTasks(newTasks);
        } catch(err) {
        console.log(err);
        }
    }

    async function completeTask(task) {
        try {
        task = await taskService.updateTask(task);

        let newTasks = tasks.map((t) => {
            return task.id === t.id ? task : t;
        })

        setTasks(newTasks);
        } catch(err) {
        console.log(err);
        }
    }

    async function deleteTask(task) {
        try {
        await taskService.deleteTask(task);

        let newTasks = tasks.filter((t) => {
            return task.id !== t.id;
        })

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks);
        } catch(err) {
        console.log(err);
        }
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
