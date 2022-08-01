import React, { useState } from 'react';

import Spinner from './Spinner';

export default function TaskTableRow(props) {
  const [completeLoading, setCompleteLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function onTaskComplete(task) {
    setCompleteLoading(true);
    try {
      task.completed = !task.completed;
      await props.completeTask(task);
    } catch(err) {
      console.log(err);
    }
    setCompleteLoading(false);
  }

  async function onTaskDelete(task) {
    setDeleteLoading(true);
    try {
      await props.deleteTask(task);
    } catch(err) {
      console.log(err);
    }
    setDeleteLoading(false);
  }

  return (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.completed ? 'Complete' : 'Incomplete'}</td>
        <td>
            <button className="btn btn-primary" onClick={(e) => onTaskComplete(props.task)}>
              {completeLoading ?
                <Spinner /> :
                'Complete'
              }
            </button>
            <button className="btn btn-danger ms-2" onClick={(e) => onTaskDelete(props.task)}>
              {deleteLoading ?
                <Spinner /> :
                'Delete'
              }
            </button>
        </td>
    </tr>
  )
}
