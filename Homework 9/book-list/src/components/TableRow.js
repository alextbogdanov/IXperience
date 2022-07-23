import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.isbn}</td>
        <td>
            <button className="btn btn-outline-primary" onClick={(e) => props.onBookEdit(props.book)}>Edit</button>
            <button className="btn btn-danger ms-2" onClick={(e) => props.onBookDelete(props.book)}>Delete</button>
        </td>
    </tr>
  )
}
