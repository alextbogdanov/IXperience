import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.isbn}</td>
        <td>
            <button className="btn btn-danger" onClick={(e) => props.onBookDelete(props.book)}>Delete</button>
        </td>
    </tr>
  )
}
