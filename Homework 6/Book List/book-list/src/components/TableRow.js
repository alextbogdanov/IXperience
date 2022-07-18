import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
        <td>{props.title}</td>
        <td>{props.author}</td>
        <td>{props.isbn}</td>
        <td>
            <a href="">x</a>
        </td>
    </tr>
  )
}
