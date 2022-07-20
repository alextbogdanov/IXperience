import React from 'react'
import TaskTableRow from './TaskTableRow';

export default function TaskTable() {
  return (
    <table class="table">
        <thead>
            <tr className="border-bottom border-dark">
                <th>Task</th>
                <th>Completed</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <TaskTableRow />
        </tbody>
    </table>
  )
}
