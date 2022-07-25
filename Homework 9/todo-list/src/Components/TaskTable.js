import React from 'react'
import TaskTableRow from './TaskTableRow';

export default function TaskTable(props) {
  return (
    <table className="table">
        <thead>
            <tr className="border-bottom border-dark">
                <th>Task</th>
                <th>Completed</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => {
            return <TaskTableRow key={task.id} task={task} completeTask={props.completeTask} deleteTask={props.deleteTask} />
          })}
        </tbody>
    </table>
  )
}
