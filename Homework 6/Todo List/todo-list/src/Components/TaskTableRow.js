import React from 'react';

export default function TaskTableRow() {
  return (
    <tr>
        <td>asdf</td>
        <td>Incomplete</td>
        <td>
            <button className="btn btn-primary">Complete</button>
            <button className="btn btn-danger ms-2">Delete</button>
        </td>
    </tr>
  )
}
