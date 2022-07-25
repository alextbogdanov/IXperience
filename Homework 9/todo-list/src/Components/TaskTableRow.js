import React from 'react';

export default function TaskTableRow(props) {
  function onTaskComplete(task) {
    task.completed = !task.completed;
    props.completeTask(task);
  }

  function onTaskDelete(task) {
    props.deleteTask(task);
  }

  return (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.completed ? 'Complete' : 'Incomplete'}</td>
        <td>
            <button className="btn btn-primary" onClick={(e) => onTaskComplete(props.task)}>Complete</button>
            <button className="btn btn-danger ms-2" onClick={(e) => onTaskDelete(props.task)}>Delete</button>
        </td>
    </tr>
  )
}
