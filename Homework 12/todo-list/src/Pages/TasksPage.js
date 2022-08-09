import React, { useState, useEffect } from 'react';

import Spinner from '../Components/Spinner';
import TaskInput from '../Components/TaskInput';
import TaskTable from '../Components/TaskTable';

import taskService from '../Services/Task.service.js';


export default function TasksPage({ user }) {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		readTasks();
	}, []);

	async function readTasks() {
		setLoading(true);
		try {
			const rTasks = await taskService.readTasks();

			setTasks(rTasks);
		} catch(err) {
			console.log(err);
		}
		setLoading(false);
	}

	async function createTask(task) {
		task = await taskService.createTask(task);

		let newTasks = [...tasks, task];
		setTasks(newTasks);
	}

	async function completeTask(task) {
		task = await taskService.updateTask(task);

		let newTasks = tasks.map((t) => {
			return task.id === t.id ? task : t;
		})

		setTasks(newTasks);
	}

	async function deleteTask(task) {
		await taskService.deleteTask(task);

		let newTasks = tasks.filter((t) => {
			return task.id !== t.id;
		})

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
							{ loading ?
								<div className="text-center"><Spinner /></div> :
								<TaskTable tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
							}
					</div>
			</div>
		</div>
	);
}
